"use client";

import { useState } from "react";

export default function SupplierForm() {
  const [name, setName] = useState("");
  return (
    <form className="mx-auto max-w-md space-y-3 p-6">
      <h2 className="text-2xl font-semibold">Supplier Form</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Company name"
        className="w-full rounded border p-2"
      />
      <button type="button" className="rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
        Submit
      </button>
    </form>
  );
}


