
'use client';

import { http, createStorage, cookieStorage } from 'wagmi'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

const projectId = "0e7d7e3276a109127bfb01619912df9f";

export const supportedChains = [
   { id: 1, name: "Ethereum" },
   { id: 137, name: "Polygon" },
 ];

const config = getDefaultConfig({
   appName: "WalletConnection",
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });


  
export default config;