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

    <div className="seed-card">

      <h2>Seed Phrase Generator</h2>

      <button onClick={generateSeedPhrase}>
        Generate Seed Phrase
      </button>

      {seed && (

        <div className="seed-box">

          <button
            onClick={() => setShowSeed(!showSeed)}
          >
            {showSeed ? "Hide Seed Phrase" : "Reveal Seed Phrase"}
          </button>

          {showSeed && (
            <p>{seed}</p>
          )}

        </div>

      )}

    </div>

  );
}