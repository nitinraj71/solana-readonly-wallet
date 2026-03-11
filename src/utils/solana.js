import { Connection } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

export const connection = new Connection(
  "https://api.devnet.solana.com"
);

export async function getBalance(publicKey) {

  const balance = await connection.getBalance(publicKey);

  return balance / 1000000000;
}

export async function getTokenBalances(publicKey) {

  const tokenAccounts =
    await connection.getParsedTokenAccountsByOwner(
      publicKey,
      { programId: TOKEN_PROGRAM_ID }
    );

  return tokenAccounts.value.map(account => {

    const info = account.account.data.parsed.info;

    return {
      mint: info.mint,
      balance: info.tokenAmount.uiAmount
    };

  });
}