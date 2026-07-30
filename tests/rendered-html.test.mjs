import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("build emits the Vue application and Sites worker", async () => {
  await Promise.all([
    access(new URL("dist/server/index.js", projectRoot)),
    access(new URL("dist/.openai/hosting.json", projectRoot)),
    access(new URL("dist/client/index.html", projectRoot)),
  ]);
});

test("static HTML includes restaurant metadata and Vue entry", async () => {
  const html = await readFile(new URL("dist/client/index.html", projectRoot), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /<title>山禾 SHAN HE｜现代中式料理<\/title>/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /twitter:card/);
  assert.match(html, /id="app"/);
});

test("Vue source preserves all dishes, anchors, and booking links", async () => {
  const app = await readFile(new URL("src/App.vue", projectRoot), "utf8");
  const dishNumbers = app.match(/number:\s*"\d{2}"/g) ?? [];

  assert.equal(dishNumbers.length, 13);
  for (const anchor of ["home", "menu", "story", "visit"]) {
    assert.match(app, new RegExp(`id="${anchor}"`));
  }
  assert.match(app, /v-for="dish in dishes"/);
  assert.match(app, /tel:02168081888/);
  assert.match(app, /周二至周日/);
});
