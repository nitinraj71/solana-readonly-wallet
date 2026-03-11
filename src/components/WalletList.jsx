import { useState } from "react";
import { deriveWallet } from "../utils/wallet";
import { getBalance, getTokenBalances } from "../utils/solana";

export default function WalletList({ mnemonic }) {

  const [wallets, setWallets] = useState([]);

  function copyAddress(address) {
    navigator.clipboard.writeText(address);
  }

  async function addWallet() {

    const keypair = await deriveWallet(
      mnemonic,
      wallets.length
    );

    const balance = await getBalance(
      keypair.publicKey
    );

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

      {wallets.map((wallet, index) => {

        const address =
          wallet.keypair.publicKey.toBase58();

        return (

          <div key={index} className="wallet-card">

            <div className="wallet-header">

              <h3>
                Wallet {index + 1}
              </h3>

              <button
                onClick={() => copyAddress(address)}
              >
                Copy Address
              </button>

            </div>

            <p className="address">
              {address}
            </p>

            <a
              href={`https://explorer.solana.com/address/${address}?cluster=devnet`}
              target="_blank"
              rel="noreferrer"
            >
              View on Explorer
            </a>

            <p>
              SOL Balance: {wallet.balance}
            </p>

            <h4>Tokens</h4>

            {wallet.tokens.length === 0 ? (
              <p>No tokens found</p>
            ) : (
              wallet.tokens.map((token, i) => (

                <p key={i}>
                  {token.mint.slice(0, 6)}...
                  : {token.balance}
                </p>

              ))
            )}

          </div>

        )

      })}

    </div>

  );
}