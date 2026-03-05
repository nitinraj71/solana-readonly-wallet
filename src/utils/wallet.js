import * as bip39 from "bip39";
import { HDKey } from "micro-ed25519-hdkey";
import { Keypair } from "@solana/web3.js";

export async function deriveWallet(mnemonic, index) {

  const seed = await bip39.mnemonicToSeed(mnemonic);

  const hd = HDKey.fromMasterSeed(seed);

  const path = `m/44'/501'/${index}'/0'`;

  const derived = hd.derive(path);

  const keypair = Keypair.fromSeed(derived.privateKey);

  return keypair;
}