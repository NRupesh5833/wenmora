import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/config/site";

const staticPaths = [
  "/",
  "/services",
  "/work",
  "/process",
  "/about",
  "/pricing",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = [...staticPaths, ...projects.map((p) => `/work/${p.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
