"use client";
import { useEffect, useRef, useState } from "react";

// Plays a project film while it is on screen, muted and looping. Reduced motion starts paused on the poster.
export default function FilmPlayer({ src, poster, title, length }: { src: string; poster: string; title: string; length: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {}
    if (reduce) {
      setUserPaused(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused) v.play().catch(() => setPlaying(false));
        else v.pause();
      },
      { threshold: 0.45 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [userPaused]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().catch(() => setPlaying(false));
    } else {
      setUserPaused(true);
      v.pause();
    }
  };

  return (
    <figure className="film">
      <div className="film-well sunken">
        {failed ? (
          <img src={poster} alt={`${title}, still frame`} />
        ) : (
          <video
            ref={ref}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
            onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
            onClick={toggle}
          />
        )}
      </div>
      <figcaption className="film-bar">
        <button type="button" className="btn btn-small" onClick={toggle} disabled={failed} aria-label={playing ? `Pause ${title}` : `Play ${title}`}>
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <rect x="2" y="1" width="3" height="10" fill="currentColor" />
              <rect x="7" y="1" width="3" height="10" fill="currentColor" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 1v10l9-5z" fill="currentColor" />
            </svg>
          )}
          {playing ? "Pause" : "Play"}
        </button>
        <span className="film-track sunken" aria-hidden="true">
          <i style={{ transform: `scaleX(${progress})` }} />
        </span>
        <span className="film-note">{length} · no sound</span>
      </figcaption>
    </figure>
  );
}
