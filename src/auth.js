import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const fork = {
  id: 1,
  name: "Fork2",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://virtual.mainnet.rpc.tenderly.co/1f43359a-cd24-49cf-a991-01675a2a5d4f",
      ],
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14353601,
    },
  },
};

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Create Wagmi" }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID }),
  ],
  ssr: true,
  transports: {
    // [fork.id]: http(),
    [mainnet.id]: http(),
  },
});
