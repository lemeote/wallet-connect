"use client";

import { useEffect, useRef } from "react";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useChainId } from "wagmi";
import { emojiAvatarForAddress } from "@/lib/emojiAvatarForAddress";
import { supportedChains } from "@/lib/config"; // Import your list of supported chains

export const ConnectBtn = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const chainId = useChainId(); // Get the current chain
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { disconnect } = useDisconnect();

  const { color: backgroundColor, emoji } = emojiAvatarForAddress(address ?? "");

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const isChainSupported = supportedChains.some((supportedChain) => supportedChain.id === chainId);

  if (!isConnected) {
    return (
      <button
        className="bg-green-500 p-3 rounded-md text-white"
        onClick={() => {
          if (isConnected) {
            disconnect();
          }
          openConnectModal?.();
        }}
        disabled={isConnecting}
      >
        {isConnecting ? "Connecting..." : "Connect your wallet"}
      </button>
    );
  }

  if (!isChainSupported) {
    return (
      <button className="bg-green-500 p-3 rounded-md text-white" onClick={openChainModal}>
        Wrong network
      </button>
    );
  }

  return (
    <div className="max-w-5xl w-full flex items-center justify-between">
      <div
        className="flex justify-center items-center px-4 py-2 border border-neutral-700 bg-neutral-800/30 rounded-xl font-mono font-bold gap-x-2 cursor-pointer"
        onClick={openAccountModal}
        role="button"
        tabIndex={0}
      >
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
          style={{
            backgroundColor,
            boxShadow: "0px 2px 2px 0px rgba(81, 98, 255, 0.20)",
          }}
        >
          {emoji}
        </div>
        <p className="text-white">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
      </div>
      <button className="btn" onClick={openChainModal}>
        Switch Networks
      </button>
    </div>
  );
};
