import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { GITHUB, projects, repoUrl } from "../lib/content.ts";

// Links point at the live GitHub account, not the old handle.
const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
for (const src of [page, readFileSync(new URL("../lib/content.ts", import.meta.url), "utf8")]) {
  assert.ok(!src.includes("ahmed-malikk"), "old GitHub handle still referenced");
}
assert.equal(GITHUB, "https://github.com/iahmedmalik");

// Every project ships its film and poster, and every doc link is a repo path.
for (const p of projects) {
  for (const f of [`${p.name}.mp4`, `${p.name}-poster.jpg`]) assert.ok(existsSync(new URL(`../public/videos/${f}`, import.meta.url)), `missing ${f}`);
  for (const d of p.docs) assert.match(repoUrl(p.repo, d.path), /^https:\/\/github\.com\/iahmedmalik\/[\w-]+\/blob\/main\/docs\//);
  assert.ok(p.tests.length > 0, `${p.name} has no test numbers`);
  if (p.status === "Prototype") assert.equal(p.demo, undefined, `${p.name} is a prototype but has a demo link`);
}
console.log(`${projects.length} projects: links, films and test evidence checked`);
