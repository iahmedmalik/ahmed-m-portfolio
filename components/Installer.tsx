"use client";
import { useEffect, useLayoutEffect, useState } from "react";

// The page's one authored moment: setup "installs" the four projects, block by block.
// Starts complete for reduced motion and without JavaScript the panel still reads as finished.
const BLOCKS = 24;

export default function Installer({ names }: { names: { name: string; file: string }[] }) {
  const [step, setStep] = useState(BLOCKS);
  const [running, setRunning] = useState(false);

  const run = () => {
    setStep(0);
    setRunning(true);
  };

  useLayoutEffect(() => {
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {}
    if (!reduce) run();
  }, []);

  useEffect(() => {
    if (!running) return;
    if (step >= BLOCKS) {
      setRunning(false);
      return;
    }
    const t = window.setTimeout(() => setStep((s) => s + 1), step % 6 === 5 ? 260 : 85);
    return () => window.clearTimeout(t);
  }, [running, step]);

  const per = BLOCKS / names.length;
  const current = Math.min(names.length - 1, Math.floor(step / per));
  const done = step >= BLOCKS;
  const pct = Math.round((step / BLOCKS) * 100);

  return (
    <div className="installer sunken-panel" aria-live="polite">
      <p className="installer-label">{done ? "Installed. Ready when you are." : `Copying: ${names[current].file}`}</p>
      <div className="progress" role="progressbar" aria-label="Setup progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
        {Array.from({ length: BLOCKS }, (_, i) => (
          <i key={i} className={i < step ? "on" : undefined} />
        ))}
      </div>
      <p className="installer-meta">
        <span>{done ? `${names.length} of ${names.length} projects` : `${current} of ${names.length} projects`}</span>
        <span>{pct}%</span>
      </p>
      <ul className="installer-list">
        {names.map((n, i) => (
          <li key={n.name} className={i < current || done ? "is-done" : i === current ? "is-now" : undefined}>
            <span className="box" aria-hidden="true" />
            {n.name}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-small" onClick={run} disabled={running}>
        {running ? "Installing…" : "Run setup again"}
      </button>
    </div>
  );
}
