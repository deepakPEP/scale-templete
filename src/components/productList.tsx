export default function ProductList() {
  const items = ["Alpha", "Beta", "Gamma"];
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h2 className="mb-3 text-2xl font-semibold">Featured Products</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <li key={it} className="rounded border p-3 text-center">{it}</li>
        ))}
      </ul>
    </section>
  );
}


