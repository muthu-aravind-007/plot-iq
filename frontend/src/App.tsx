import { useState } from "react";

import Navbar from "./components/Navbar";
import PropertyForm from "./components/PropertyForm";
import PropertyResult from "./components/PropertyResult";

import type { PropertyResponse } from "./types/property";

function App() {
  const [result, setResult] = useState<PropertyResponse | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-10">

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">

          {!result ? (
            <PropertyForm
              setResult={setResult}
            />
          ) : (
            <PropertyResult
              result={result}
              onReset={() => setResult(null)}
            />
          )}

        </div>

      </main>

    </div>
  );
}

export default App;