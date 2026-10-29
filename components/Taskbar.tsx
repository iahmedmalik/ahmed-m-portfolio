"use client";
import { useEffect, useState } from "react";

const TASKS = [
  { id: "welcome", label: "Welcome" },
  { id: "components", label: "Projects", group: ["components", "zindex", "pulsemetrics", "committeekeeper", "queuecare", "flowplan", "qa"] },
  { id: "readme", label: "Read Me" },
  { id: "contact", label: "Contact" },
];

// The page's navigation, as a taskbar: one button per step, the current one pressed in, and Lahore's time in the tray.
export default function Taskbar() {
  const [active, setActive] = useState("welcome");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      try {
        setTime(new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Karachi" }).format(new Date()));
      } catch {
        setTime("");
      }
    };
    fmt();
    const t = window.setInterval(fmt, 30_000);
    const ids = TASKS.flatMap((t) => t.group ?? [t.id]);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!vis) return;
        const task = TASKS.find((t) => (t.group ?? [t.id]).includes(vis.target.id));
        if (task) setActive(task.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.clearInterval(t);
      io.disconnect();
    };
  }, []);

  return (
    <nav className="taskbar" aria-label="Sections">
      <a className="start" href="#welcome" aria-label="Ahmed M., back to the start">
        <span className="start-mark" aria-hidden="true">
          AM
        </span>
        <span className="start-name">Ahmed M.</span>
      </a>
      <span className="taskbar-sep" aria-hidden="true" />
      <div className="tasks">
        {TASKS.map((t) => (
          <a key={t.id} href={`#${t.id}`} className={`task${active === t.id ? " is-active" : ""}`} aria-current={active === t.id ? "true" : undefined}>
            {t.label}
          </a>
        ))}
      </div>
      <a className="tray" href="https://github.com/iahmedmalik" target="_blank" rel="noreferrer">
        <span className="tray-gh">GitHub</span>
        {time && <span className="tray-time">Lahore {time}</span>}
      </a>
    </nav>
  );
}
