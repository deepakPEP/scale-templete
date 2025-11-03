export default function Clientele() {
  const clients = ["Acme Co.", "Globex", "Soylent"];
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h2 className="mb-2 text-2xl font-semibold">Clientele</h2>
      <div className="flex gap-3">
        {clients.map((c) => (
          <span key={c} className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800">{c}</span>
        ))}
      </div>
    </section>
  );
}


