import { useState } from "react";
import { deriveWallet } from "../utils/wallet";

export default function WalletList({ mnemonic }) {

  const [wallets, setWallets] = useState([]);

  async function addWallet() {

    const keypair = await deriveWallet(
      mnemonic,
      wallets.length
    );

    setWallets([...wallets, keypair]);
  }

  return (

    <div>

      <button onClick={addWallet}>
        Add Wallet
      </button>

      {wallets.map((wallet, index) => (

        <div key={index}>

          <h3>Wallet {index + 1}</h3>

          <p>
            Address: {wallet.publicKey.toBase58()}
          </p>

        </div>

      ))}

    </div>

  );
}