export default function WhyUs() {
  const points = ["Quality", "Reliability", "Support"];
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h2 className="mb-3 text-2xl font-semibold">Why Choose Us</h2>
      <ul className="list-disc pl-6">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}


