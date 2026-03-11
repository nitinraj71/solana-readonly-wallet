import { useState } from "react";
import { deriveWallet } from "../utils/wallet";
import { getBalance, getTokenBalances } from "../utils/solana";

export default function WalletList({ mnemonic }) {

  const [wallets, setWallets] = useState([]);

  async function addWallet() {

    const keypair = await deriveWallet(
      mnemonic,
      wallets.length
    );

    const balance = await getBalance(keypair.publicKey);

    const tokens = await getTokenBalances(
      keypair.publicKey
    );

    setWallets([
      ...wallets,
      {
        keypair,
        balance,
        tokens
      }
    ]);
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
            Address: {wallet.keypair.publicKey.toBase58()}
          </p>

          <p>
            SOL: {wallet.balance}
          </p>

          <h4>Tokens</h4>

          {wallet.tokens.map((token, i) => (

            <p key={i}>
              {token.mint} : {token.balance}
            </p>

          ))}

        </div>

      ))}

    </div>

  );
}