"use client";
import { ThemeProvider } from "next-themes";

import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider, SignInButton } from "@farcaster/auth-kit";
import Profile from "./profile";
import Feed from "./feed";

const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: "example.com",
  siweUri: "https://example.com/login",
};

export default function Home() {
  return (
    <AuthKitProvider config={config}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <main className="bg-white min-h-screen items-end">
          <div className="p-4">
            <SignInButton
              onSuccess={({ fid, username }) => {
                console.log(`Hello, ${username}! Your fid is ${fid}.`);
              }}
            />
            <Feed />
          </div>
        </main>
      </ThemeProvider>
    </AuthKitProvider>
  );
}
