import { useState } from "react";
import Navbar from "./components/Navbar";
import PropertyForm from "./components/PropertyForm";
import PropertyResult from "./components/PropertyResult";
import type { PropertyResponse } from "./types/property";

function App() {
  const [result, setResult] = useState<PropertyResponse | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      {!result ? (
        <PropertyForm setResult={setResult} />
      ) : (
        <PropertyResult
          result={result}
          onBack={() => setResult(null)}
        />
      )}
    </div>
  );
}

export default App;