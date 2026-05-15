import { NextResponse } from "next/server";

const cmsConfig = {
  backend: {
    name: "github",
    repo: "benjaminsiegel/bostonbetterstreets",
    branch: "main",
    base_url: "https://sveltia-cms-auth.deno.dev",
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "updates",
      label: "Updates",
      folder: "content/updates",
      create: true,
      slug: "{{slug}}",
      sortable_fields: ["date", "title"],
      fields: [
        { label: "Title", name: "title", widget: "string", hint: "The headline for this update" },
        {
          label: "Slug", name: "slug", widget: "string",
          hint: "URL-friendly identifier (lowercase, hyphens only, e.g. 'hyde-park-safety-walk')",
          pattern: ["^[a-z0-9]+(?:-[a-z0-9]+)*$", "Use lowercase letters, numbers, and hyphens only"],
        },
        { label: "Date", name: "date", widget: "datetime", date_format: "YYYY-MM-DD", time_format: false, format: "YYYY-MM-DD" },
        {
          label: "Type", name: "type", widget: "select", default: "news",
          options: [
            { label: "News", value: "news" },
            { label: "Action Alert", value: "action-alert" },
            { label: "Victory", value: "victory" },
            { label: "Setback", value: "setback" },
            { label: "Event", value: "event" },
          ],
        },
        { label: "Author", name: "author", widget: "string", default: "BBSC Team" },
        { label: "Excerpt", name: "excerpt", widget: "text", hint: "A short summary (1-2 sentences) shown on the homepage and updates list" },
        { label: "Featured Image", name: "image", widget: "image", required: false, hint: "This image appears on cards and at the top of the article" },
        { label: "Image Alt Text", name: "imageAlt", widget: "string", required: false, hint: "Describe the image for accessibility" },
        { label: "Body", name: "body", widget: "markdown", hint: "The full article content" },
        { label: "Tags", name: "tags", widget: "list", default: [], hint: "Add relevant tags (press Enter after each)" },
        {
          label: "Related Project", name: "relatedProjectId", widget: "select", required: false,
          options: [
            { label: "None", value: "" },
            { label: "Hyde Park Avenue", value: "hyde-park-avenue" },
            { label: "Blue Hill Avenue", value: "blue-hill-avenue" },
            { label: "Columbia Road", value: "columbia-road" },
            { label: "Mass Ave Cambridge Line", value: "mass-ave-cambridge-line" },
            { label: "Centre Street West Roxbury", value: "centre-street-west-roxbury" },
            { label: "American Legion Highway", value: "american-legion-highway" },
            { label: "Cummins Highway", value: "cummins-highway" },
          ],
        },
        { label: "Featured", name: "featured", widget: "boolean", default: false, hint: "Feature this update prominently" },
      ],
    },
  ],
};

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BBSC Admin</title>
  <script>window.CMS_MANUAL_INIT = true;</script>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  <script>
    CMS.init({ config: ${JSON.stringify(cmsConfig)} });
  </script>
</body>
</html>`;

export async function GET() {
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
