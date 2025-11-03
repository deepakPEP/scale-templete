export default function ImageContent() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-6 sm:grid-cols-2">
      <div className="aspect-video rounded bg-zinc-200 dark:bg-zinc-800" />
      <div>
        <h3 className="mb-2 text-xl font-semibold">Image + Content</h3>
        <p className="text-zinc-600 dark:text-zinc-400">Describe your product with a supporting image.</p>
      </div>
    </section>
  );
}


