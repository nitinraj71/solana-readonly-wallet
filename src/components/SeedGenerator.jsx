import { generateMnemonic } from "bip39";
import { useState } from "react";

export default function SeedGenerator({setMnemonic}){

  const [generatedSeed,setGeneratedSeed] = useState("")
  const [showSeed,setShowSeed] = useState(false)
  const [inputSeed,setInputSeed] = useState("")

  function generateSeed(){

    const mnemonic = generateMnemonic()

    setGeneratedSeed(mnemonic)
    setMnemonic(mnemonic)
  }

  function importSeed(){

    if(!inputSeed) return

    setMnemonic(inputSeed.trim())
  }

  return(

    <div className="seed-card">

      <h2>Create Wallet</h2>

      <button onClick={generateSeed}>
        Generate Seed Phrase
      </button>

      {generatedSeed && (

        <div>

          <button onClick={()=>setShowSeed(!showSeed)}>
            {showSeed ? "Hide Seed" : "Reveal Seed"}
          </button>

          {showSeed && (
            <p>{generatedSeed}</p>
          )}

        </div>

      )}

      <hr style={{margin:"20px 0"}}/>

      <h2>Import Wallet</h2>

      <textarea
        placeholder="Paste your 12 word seed phrase"
        onChange={(e)=>setInputSeed(e.target.value)}
      />

      <button onClick={importSeed}>
        Import Wallet
      </button>

    </div>

  )

}