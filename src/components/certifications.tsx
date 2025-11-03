export default function Certifications() {
  const certs = ["ISO 9001", "ISO 14001", "CE"];
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h2 className="mb-2 text-2xl font-semibold">Certifications</h2>
      <ul className="list-disc pl-6">
        {certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}


