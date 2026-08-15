import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server renders the Lefty homepage with canonical identity", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>左撇子整合行銷/);
  assert.match(html, /rel="canonical" href="https:\/\/lefty-erp\.com"/);
  assert.match(html, /info@lefthandedmkt\.com/);
  assert.match(html, /"@type":"Organization"/);
  assert.match(html, /"@type":"WebSite"/);
  assert.match(html, /介面示意/);
});

test("solution and guide pages expose answer-first structured content", async () => {
  const [solutionResponse, guideResponse] = await Promise.all([
    render("/solutions/erp-system"),
    render("/guides/when-does-a-business-need-erp"),
  ]);
  assert.equal(solutionResponse.status, 200);
  assert.equal(guideResponse.status, 200);
  const [solution, guide] = await Promise.all([solutionResponse.text(), guideResponse.text()]);
  assert.match(solution, /客製 ERP 系統開發/);
  assert.match(solution, /先說結論/);
  assert.match(solution, /"@type":"Service"/);
  assert.match(guide, /中小企業什麼時候需要 ERP/);
  assert.match(guide, /簡短答案/);
  assert.match(guide, /"@type":"Article"/);
});

test("crawler files cover every published route", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
  ]);
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \/$/m);
  assert.match(robots, /https:\/\/lefty-erp\.com\/sitemap\.xml/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 20);
  assert.match(sitemap, /\/solutions\/erp-system\//);
  assert.match(sitemap, /\/guides\/when-does-a-business-need-erp\//);
  assert.match(sitemap, /\/about\//);
});
