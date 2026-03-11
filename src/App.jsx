import { useState } from "react";
import SeedGenerator from "./components/SeedGenerator";
import WalletList from "./components/WalletList";

function App(){

  const [mnemonic,setMnemonic] = useState("");

  return(

    <div>

      <div className="header">
        <h1>Solana Wallet Viewer</h1>
      </div>

      <div className="container">

        <SeedGenerator setMnemonic={setMnemonic}/>

        {mnemonic && (
          <WalletList mnemonic={mnemonic}/>
        )}

      </div>

    </div>

  )

}

export default App