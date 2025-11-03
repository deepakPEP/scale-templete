"use client";

import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-2xl p-6">
      <button className="w-full rounded border p-3 text-left" onClick={() => setOpen(!open)}>
        What is this template?
      </button>
      {open && (
        <div className="rounded-b border-x border-b p-3 text-zinc-600 dark:text-zinc-400">
          A lightweight Next.js + Tailwind starter with sample sections.
        </div>
      )}
    </div>
  );
}


