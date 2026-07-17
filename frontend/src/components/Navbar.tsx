import { Map, ShieldCheck, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/20">

            <Map className="h-6 w-6 text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-tight">

              Plot
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                IQ
              </span>

            </h1>

            <p className="text-xs text-neutral-500">

              AI Property Intelligence

            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 md:flex">

            <ShieldCheck
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-300">

              Powered by Mireye

            </span>

          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">

            <Sparkles
              size={18}
              className="text-cyan-400"
            />

          </div>

        </div>

      </div>

    </header>
  );
}