import { useState } from "react";
import SeedGenerator from "./components/SeedGenerator";
import WalletList from "./components/WalletList";

function App() {

  const [mnemonic, setMnemonic] = useState("");

  return (

    <div>

      <h1>Solana Read Only Wallet</h1>

      <SeedGenerator setMnemonic={setMnemonic} />

      <p>Seed Phrase: {mnemonic}</p>

      {mnemonic && <WalletList mnemonic={mnemonic} />}

    </div>

  );
}

export default App;