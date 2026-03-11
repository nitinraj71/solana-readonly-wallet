import { useState } from "react";
import SeedGenerator from "./components/SeedGenerator";
import WalletList from "./components/WalletList";

function App() {

  const [mnemonic, setMnemonic] = useState("");

  return (

    <div className="app">

      <header className="header">
        <h1>Solana Wallet Dashboard</h1>
      </header>

      <main className="container">

        <SeedGenerator setMnemonic={setMnemonic} />

        {mnemonic && (
          <WalletList mnemonic={mnemonic} />
        )}

      </main>

    </div>

  );
}

export default App;