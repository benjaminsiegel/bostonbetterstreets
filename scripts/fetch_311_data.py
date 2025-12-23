#!/usr/bin/env python3
"""
Boston 311 Street Safety Data Fetcher

This script downloads Boston 311 data and filters for street safety issues.
Run this locally to generate the data for the map.

Usage:
    python fetch_311_data.py

Output:
    ../public/311-map/street_safety_311.json
"""

import json
import csv
import urllib.request
import ssl
from datetime import datetime
from collections import Counter

# Boston 311 data URLs (from data.boston.gov)
DATA_URLS = {
    "2024": "https://data.boston.gov/dataset/8048697b-ad64-4bfc-b090-ee00169f2323/resource/dff4d804-5031-443a-8409-8344efd0e5c8/download/tmpm461rr5o.csv",
    "2025": "https://data.boston.gov/dataset/8048697b-ad64-4bfc-b090-ee00169f2323/resource/9d7c2214-4709-478a-a2e8-fb2020a5bb94/download/tmpnxk48kr1.csv",
}

# Street safety related categories and keywords
SAFETY_CATEGORIES = [
    # Traffic & signals
    "Request for Traffic Signal",
    "Traffic Signal",
    "Traffic Signal Inspection",
    "New Traffic Signal",
    "Traffic Signal Timing",
    # Speeding & enforcement
    "Speeding",
    "Speed Bump",
    "Speed Limit Sign",
    "Speeding Complaint",
    # Crosswalks & pedestrians
    "Crosswalk",
    "Crosswalk Marking",
    "Pedestrian Signal",
    "Pedestrian",
    "Sidewalk",
    "Sidewalk Repair",
    # Stop signs & traffic control
    "Stop Sign",
    "New Stop Sign",
    "Sign Request",
    "Traffic Sign",
    "Traffic Control",
    # Road safety
    "Pothole",
    "Street Light",
    "Street Light Outage",
    "Road Hazard",
    "Roadway",
    "Street Flooding",
    # Bike infrastructure
    "Bike Lane",
    "Bicycle",
    # Parking & blocking
    "Blocking",
    "Double Parking",
    "Illegal Parking",
]

SAFETY_KEYWORDS = [
    "speeding",
    "dangerous",
    "unsafe",
    "hazard",
    "crosswalk",
    "pedestrian",
    "cyclist",
    "bicycle",
    "bike lane",
    "traffic signal",
    "stop sign",
    "close call",
    "near miss",
    "accident",
    "crash",
    "hit and run",
    "reckless",
    "running red",
    "running stop",
    "blocking crosswalk",
    "blocking bike lane",
    "visibility",
    "blind spot",
    "school zone",
    "playground",
]

# Category color mapping for the map
CATEGORY_COLORS = {
    "traffic_signal": "#ff6b6b",      # Red - signals
    "speeding": "#feca57",            # Yellow - speeding
    "crosswalk": "#48dbfb",           # Cyan - crosswalks
    "stop_sign": "#ff9ff3",           # Pink - stop signs
    "pothole": "#a55eea",             # Purple - potholes
    "street_light": "#ffeaa7",        # Light yellow - lights
    "bike": "#1dd1a1",                # Green - bike
    "sidewalk": "#54a0ff",            # Blue - sidewalk
    "other": "#c8d6e5",               # Gray - other
}


def categorize_issue(reason, description=""):
    """Categorize an issue based on reason and description."""
    text = f"{reason} {description}".lower()

    if any(kw in text for kw in ["traffic signal", "signal timing", "traffic light"]):
        return "traffic_signal"
    elif any(kw in text for kw in ["speed", "speeding"]):
        return "speeding"
    elif any(kw in text for kw in ["crosswalk", "pedestrian", "crossing"]):
        return "crosswalk"
    elif any(kw in text for kw in ["stop sign"]):
        return "stop_sign"
    elif any(kw in text for kw in ["pothole", "road", "pavement"]):
        return "pothole"
    elif any(kw in text for kw in ["street light", "light out", "lighting"]):
        return "street_light"
    elif any(kw in text for kw in ["bike", "bicycle", "cyclist"]):
        return "bike"
    elif any(kw in text for kw in ["sidewalk", "curb"]):
        return "sidewalk"
    else:
        return "other"


def is_safety_related(row):
    """Check if a 311 request is related to street safety."""
    reason = row.get("reason", row.get("REASON", "")).lower()
    subject = row.get("subject", row.get("SUBJECT", "")).lower()
    description = row.get("description", row.get("DESCRIPTION", "")).lower()
    case_title = row.get("case_title", row.get("CASE_TITLE", "")).lower()

    combined_text = f"{reason} {subject} {description} {case_title}"

    # Check categories
    for cat in SAFETY_CATEGORIES:
        if cat.lower() in combined_text:
            return True

    # Check keywords
    for kw in SAFETY_KEYWORDS:
        if kw in combined_text:
            return True

    return False


def download_and_process(year, url):
    """Download and process 311 data for a given year."""
    print(f"Downloading {year} data from: {url}")

    # Create SSL context that doesn't verify (for some corporate networks)
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    try:
        with urllib.request.urlopen(url, context=ctx) as response:
            # Read and decode the CSV
            content = response.read().decode('utf-8')
            reader = csv.DictReader(content.splitlines())

            records = []
            category_counts = Counter()

            for row in reader:
                if not is_safety_related(row):
                    continue

                # Extract coordinates
                lat = row.get("latitude", row.get("LATITUDE", ""))
                lon = row.get("longitude", row.get("LONGITUDE", ""))

                # Skip if no coordinates
                if not lat or not lon:
                    continue

                try:
                    lat = float(lat)
                    lon = float(lon)
                except ValueError:
                    continue

                # Skip invalid coordinates
                if lat == 0 or lon == 0:
                    continue
                if not (42.2 < lat < 42.4 and -71.2 < lon < -70.9):
                    continue

                reason = row.get("reason", row.get("REASON", row.get("case_title", row.get("CASE_TITLE", "Unknown"))))
                category = categorize_issue(reason, row.get("description", row.get("DESCRIPTION", "")))
                category_counts[category] += 1

                record = {
                    "id": row.get("case_enquiry_id", row.get("CASE_ENQUIRY_ID", "")),
                    "lat": lat,
                    "lon": lon,
                    "date": row.get("open_dt", row.get("OPEN_DT", ""))[:10],
                    "reason": reason,
                    "description": row.get("description", row.get("DESCRIPTION", ""))[:200],
                    "status": row.get("case_status", row.get("CASE_STATUS", "")),
                    "neighborhood": row.get("neighborhood", row.get("NEIGHBORHOOD", "")),
                    "address": row.get("location", row.get("LOCATION", "")),
                    "category": category,
                    "year": year,
                }
                records.append(record)

            print(f"  Found {len(records)} street safety records")
            print(f"  Categories: {dict(category_counts)}")
            return records

    except Exception as e:
        print(f"  Error downloading {year}: {e}")
        return []


def main():
    """Main function to fetch and process all data."""
    all_records = []

    for year, url in DATA_URLS.items():
        records = download_and_process(year, url)
        all_records.extend(records)

    print(f"\nTotal records: {len(all_records)}")

    # Sort by date (newest first)
    all_records.sort(key=lambda x: x["date"], reverse=True)

    # Prepare output
    output = {
        "generated": datetime.now().isoformat(),
        "total_count": len(all_records),
        "categories": CATEGORY_COLORS,
        "records": all_records,
    }

    # Write to JSON file
    output_path = "../public/311-map/street_safety_311.json"
    with open(output_path, "w") as f:
        json.dump(output, f, indent=2)

    print(f"\nSaved to {output_path}")

    # Also create a summary
    category_counts = Counter(r["category"] for r in all_records)
    neighborhood_counts = Counter(r["neighborhood"] for r in all_records)

    print("\nTop categories:")
    for cat, count in category_counts.most_common(10):
        print(f"  {cat}: {count}")

    print("\nTop neighborhoods:")
    for hood, count in neighborhood_counts.most_common(10):
        print(f"  {hood}: {count}")


if __name__ == "__main__":
    main()
