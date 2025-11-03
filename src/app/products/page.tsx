export default function ProductsPage() {
  const products = [
    { id: 1, name: "Sample Product A" },
    { id: 2, name: "Sample Product B" },
    { id: 3, name: "Sample Product C" },
  ];

  return (
    <section className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <li key={p.id} className="rounded-lg border p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-zinc-600">This is a demo item.</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


