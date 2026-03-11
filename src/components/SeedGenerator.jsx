import { generateMnemonic } from "bip39";
import { useState } from "react";

export default function SeedGenerator({ setMnemonic }) {

  const [seed, setSeed] = useState("");
  const [showSeed, setShowSeed] = useState(false);

  function generateSeedPhrase() {

    const mnemonic = generateMnemonic();

    setSeed(mnemonic);
    setMnemonic(mnemonic);
  }

  return (

    <div className="wallet-card">

      <button onClick={generateSeedPhrase}>
        Generate Seed Phrase
      </button>

      <button
        onClick={() => setShowSeed(!showSeed)}
      >
        {showSeed ? "Hide Seed Phrase" : "Show Seed Phrase"}
      </button>

      {showSeed && (
        <p className="seed">{seed}</p>
      )}

    </div>

  );
}