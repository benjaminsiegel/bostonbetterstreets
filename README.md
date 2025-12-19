# Boston Better Streets Coalition

A grassroots coalition of 700+ Boston residents fighting for safer streets, better bike infrastructure, and accessible public transit.

## About

The Boston Better Streets Coalition was founded in 2024 to hold the city accountable for its promises on street safety. We:

- **Track stalled projects** - Document the delays and broken promises on street safety improvements
- **Map pain points** - Crowd-source dangerous locations across Boston
- **Communicate updates** - Keep residents informed about what's happening (or not happening)

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Interactive Maps**: Leaflet / React-Leaflet
- **Database**: Supabase (for crowd-sourced data)
- **Icons**: Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── faq/               # FAQ page
│   ├── map/               # Interactive pain point map
│   ├── projects/          # Stalled projects tracker
│   ├── resources/         # Partner organizations
│   ├── take-action/       # Call-to-action page
│   └── updates/           # News and action alerts
├── components/            # React components
│   ├── Map/              # Leaflet map components
│   ├── Navigation.tsx    # Site navigation
│   └── Footer.tsx        # Site footer
├── data/                  # Static data files
│   ├── painPoints.ts     # Pain point locations
│   ├── projects.ts       # Project data
│   └── updates.ts        # Blog/update content
└── lib/                   # Utilities
    └── supabase.ts       # Supabase client
```

## Database Setup

Run the SQL in `supabase-schema.sql` in your Supabase SQL Editor to set up the database tables.

## Key Features

### Pain Point Map
Interactive Leaflet map showing community-reported dangerous locations with filtering by severity and type.

### Project Tracker
Detailed tracking of stalled street safety projects including Hyde Park Avenue, with timelines and status updates.

### Updates/Blog
Action alerts, news, and event updates to keep the community informed and engaged.

### Take Action
Easy ways for residents to contact officials, report issues, and get involved.

## Deployment

Deploy on Vercel for the best experience:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bostonbetterstreets/website)

## License

MIT

## Contact

- Website: [bostonbetterstreets.org](https://bostonbetterstreets.org)
- Email: info@bostonbetterstreets.org
