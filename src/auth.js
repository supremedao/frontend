import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { http, createConfig } from "wagmi";

export const config = createConfig({
  appName: "SupremeDAO",
  projectId: "3708dfbebb6e80b01917f1c8b75ecbd5",
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
});
