export default function ProductListing() {
  const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);
  return (
    <section className="mx-auto max-w-6xl p-6">
      <h2 className="mb-3 text-2xl font-semibold">All Products</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it} className="rounded border p-4">
            <div className="mb-2 aspect-video rounded bg-zinc-200 dark:bg-zinc-800" />
            <h3 className="font-medium">{it}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}


