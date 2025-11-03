export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 p-4 backdrop-blur dark:bg-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-xl font-semibold">Grow Template</span>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}


