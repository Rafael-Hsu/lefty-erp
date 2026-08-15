import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const baseUrl = process.env.STATIC_SOURCE_URL ?? "http://localhost:3000";
const outputDir = join(process.cwd(), "docs");
const solutionSlugs = ["erp-system", "crm-system", "inventory-system", "marketing-automation", "member-platform", "system-integration"];
const guideSlugs = [
  "when-does-a-business-need-erp",
  "custom-vs-off-the-shelf-erp",
  "erp-cost-estimation",
  "excel-to-business-system",
  "crm-erp-inventory-differences",
  "why-digital-transformation-fails",
  "line-ecommerce-accounting-integration",
  "crm-implementation-checklist",
  "inventory-system-selection",
  "marketing-automation-first-workflow",
];
const routes = [
  "/",
  "/solutions/",
  ...solutionSlugs.map((slug) => `/solutions/${slug}/`),
  "/guides/",
  ...guideSlugs.map((slug) => `/guides/${slug}/`),
  "/about/",
];

function makeStatic(html) {
  return html
    .replace(/<link\b[^>]*rel=["'](?:modulepreload|preload)["'][^>]*>/gi, "")
    .replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, (match, attributes) =>
      /type=["']application\/ld\+json["']/i.test(attributes) ? match : "",
    )
    .replace("</body>", '<script src="/effects.js" defer></script></body>');
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl));
  if (!response.ok) throw new Error(`Failed to render ${route}: ${response.status}`);
  const html = makeStatic(await response.text());
  const routeDir = route === "/" ? outputDir : join(outputDir, route);
  await mkdir(routeDir, { recursive: true });
  await writeFile(join(routeDir, "index.html"), html);
}

await cp(join(process.cwd(), "dist/client/_next"), join(outputDir, "_next"), { recursive: true });
for (const asset of ["og.png", "effects.js", "robots.txt", "sitemap.xml"]) {
  await cp(join(process.cwd(), "public", asset), join(outputDir, asset));
}
await writeFile(join(outputDir, "CNAME"), "lefty-erp.com\n");
await writeFile(join(outputDir, ".nojekyll"), "");

const sitemap = await readFile(join(outputDir, "sitemap.xml"), "utf8");
if ((sitemap.match(/<url>/g) ?? []).length !== routes.length) throw new Error("Sitemap and exported route counts differ");
console.log(`Exported ${routes.length} routes to docs/`);
