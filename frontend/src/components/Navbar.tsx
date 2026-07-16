export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold">
          Plot<span className="text-emerald-400">IQ</span>
        </h1>

        <p className="text-sm text-neutral-400">
          Powered by Mireye
        </p>
      </div>
    </nav>
  );
}