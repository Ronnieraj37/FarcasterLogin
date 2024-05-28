"use client";
import styles from "./page.module.css";
import "@farcaster/auth-kit/styles.css";
import { ThemeProvider } from "next-themes";
import { AuthKitProvider, useProfile, SignInButton } from "@farcaster/auth-kit";
import { useEffect } from "react";
import Profile from "./profile";
const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: "example.com",
  siweUri: "https://example.com/login",
};

export default function Home() {
  return (
    <AuthKitProvider config={config}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <main className={styles.main}>
          <div style={{ color: "white", backgroundColor: "white" }}>
            <SignInButton
              onSuccess={({ fid, username }) => {
                console.log(`Hello, ${username}! Your fid is ${fid}.`);
              }}
            />
            <Profile />
          </div>
        </main>
      </ThemeProvider>
    </AuthKitProvider>
  );
}
