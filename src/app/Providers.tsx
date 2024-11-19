"use client";

import SolanaProviders from "./SolanaProviders";
import EthereumProviders from "./EthereumProviders";

import { WagmiProvider, cookieToInitialState } from "wagmi";

type Props = {
  children: React.ReactNode;
  cookie?: string | null;
};

export default function Providers({ children, cookie }: Props) {
  return (
    <SolanaProviders>
      <EthereumProviders cookie={cookie}>{children}</EthereumProviders>
    </SolanaProviders>
  );
};
