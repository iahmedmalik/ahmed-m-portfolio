"use client";
import { useState } from "react";

// "Registration information": the contact details as read-only setup fields, with a working copy button.
export default function Contact({ email, github, linkedin }: { email: string; github: string; linkedin: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
      window.setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("error");
    }
  };
  return (
    <div className="register">
      <div className="field">
        <label htmlFor="reg-name">Registered to</label>
        <input id="reg-name" className="sunken" readOnly value="Ahmed M." />
      </div>
      <div className="field">
        <label htmlFor="reg-email">Email</label>
        <div className="field-row">
          <input id="reg-email" className="sunken serial" readOnly value={email} onFocus={(e) => e.currentTarget.select()} />
          <button type="button" className="btn" onClick={copy}>
            {state === "copied" ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="field-note" role="status">
          {state === "copied" ? "Email copied to your clipboard." : state === "error" ? "Copying isn't allowed here. Select the address above instead." : ""}
        </p>
      </div>
      <div className="field">
        <span className="label">Find me on</span>
        <div className="field-row links">
          <a className="btn" href={github} target="_blank" rel="noreferrer">
            github.com/iahmedmalik
          </a>
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
