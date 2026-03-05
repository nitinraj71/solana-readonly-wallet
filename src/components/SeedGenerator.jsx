import { generateMnemonic } from "bip39";
import { useState } from "react";

export default function SeedGenerator({ setMnemonic }) {

  const [seed, setSeed] = useState("");

  function generateSeedPhrase() {

    const mnemonic = generateMnemonic();

    console.log("Generated Seed:", mnemonic);

    setSeed(mnemonic);
    setMnemonic(mnemonic);
  }

  return (

    <div>

      <button onClick={generateSeedPhrase}>
        Generate Seed Phrase
      </button>

      <p>{seed}</p>

    </div>

  );
}