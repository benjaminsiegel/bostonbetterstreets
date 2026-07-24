import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type UpdateType = "news" | "action-alert" | "victory" | "setback" | "event";

export interface Update {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type: UpdateType;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  relatedProjectId?: string;
  featured?: boolean;
  tags: string[];
}

const updatesDirectory = path.join(process.cwd(), "content/updates");

export function getUpdates(): Update[] {
  const filenames = fs.readdirSync(updatesDirectory);

  const updates = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(updatesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      const date = data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date);
      const imageFit: Update["imageFit"] =
        data.imageFit === "contain" ? "contain" : "cover";

      return {
        id: data.slug,
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        content: content,
        type: data.type as UpdateType,
        date: date,
        author: data.author,
        image: data.image,
        imageAlt: data.imageAlt,
        imageFit,
        relatedProjectId: data.relatedProjectId,
        featured: data.featured,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return updates;
}

export function getUpdateBySlug(slug: string): Update | undefined {
  return getUpdates().find((update) => update.slug === slug);
}

export function getRecentUpdates(count: number = 3): Update[] {
  return getUpdates().slice(0, count);
}

export function getFeaturedUpdates(): Update[] {
  return getUpdates().filter((u) => u.featured);
}

export function getUpdatesByType(type: UpdateType): Update[] {
  return getUpdates().filter((u) => u.type === type);
}

export const updates = getUpdates();
