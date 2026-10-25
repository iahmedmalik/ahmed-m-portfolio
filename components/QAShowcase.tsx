"use client";

import { useState } from "react";
const root = "https://github.com/iahmedmalik/saucedemo-qa-testing";
const cases = [
  { id: "TC-001", account: "standard_user", result: "Products page displayed" },
  { id: "TC-002", account: "locked_out_user", result: "Locked-out error displayed" },
  { id: "TC-003", account: "problem_user", result: "Products page displayed" },
  { id: "TC-004", account: "performance_glitch_user", result: "Products page displayed" },
];
export default function QAShowcase() {
  const [view, setView] = useState<"execution" | "defects">("execution");
  return <section className="qa-case" id="qa" aria-labelledby="qa-title">
    <div className="qa-story">
      <h2 id="qa-title">A test is only useful<br />if you can trust it.</h2>
      <h3>SauceDemo / Manual QA</h3>
      <p>Manual software testing for a public demo shop: test case design, test execution and defect reporting, with a clear record of what was checked.</p>
      <p>I documented 17 cases covering login, products, sorting, cart, checkout and logout. The supplied execution record covers four login cases; the other 13 remain unexecuted.</p>
      <div className="text-links"><a href={`${root}/blob/main/test-cases/manual-test-cases.xlsx`} target="_blank" rel="noreferrer">Test workbook</a><a href={`${root}/blob/main/test-results/test-execution-report.md`} target="_blank" rel="noreferrer">Execution report</a></div>
    </div>
    <div className="qa-record">
      <div className="qa-record-tabs" role="group" aria-label="QA project evidence"><button aria-pressed={view === "execution"} onClick={() => setView("execution")}>Execution record</button><button aria-pressed={view === "defects"} onClick={() => setView("defects")}>Defect reports</button></div>
      {view === "execution" ? <div className="qa-execution"><div className="record-caption"><strong>Login / recorded results</strong><span>4 executed · 4 passed</span></div><div className="qa-table" role="table" aria-label="Executed login cases"><div className="qa-table-head" role="row"><span role="columnheader">Case / account</span><span role="columnheader">Actual result</span><span role="columnheader">Status</span></div>{cases.map(c => <div className="qa-table-row" role="row" key={c.id}><span role="cell"><small>{c.id}</small><code>{c.account}</code></span><span role="cell">{c.result}</span><span className="pass" role="cell">Pass</span></div>)}</div><p className="record-note">Extracted from the repository’s execution report and test workbook. These results apply to login only.</p></div> : <div className="qa-defects" aria-live="polite"><h4>Two observations. Reproduction still to confirm.</h4><a href={`${root}/blob/main/bug-reports/BUG-001-product-image-display.md`} target="_blank" rel="noreferrer"><small>BUG-001</small><strong>Product image display issue</strong></a><a href={`${root}/blob/main/bug-reports/BUG-002-product-mismatch.md`} target="_blank" rel="noreferrer"><small>BUG-002</small><strong>Product mismatch during click-through</strong></a><p className="record-note">The reports preserve the observations. Exact steps, screenshots and triage details need confirmation before these can be presented as fully reproducible defects.</p></div>}
      <a className="qa-repo" href={root} target="_blank" rel="noreferrer">Open the complete QA repository</a>
    </div>
  </section>;
}
