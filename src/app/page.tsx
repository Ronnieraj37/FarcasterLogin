"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "@farcaster/auth-kit/styles.css";
import { ThemeProvider } from "next-themes";
import { AuthKitProvider, useProfile, SignInButton } from "@farcaster/auth-kit";
const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: "example.com",
  siweUri: "https://example.com/login",
};

export default function Home() {
  const profile = useProfile();
  const {
    isAuthenticated,
    profile: { fid, displayName, custody },
  } = profile;
  return (
    <AuthKitProvider config={config}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <main className={styles.main}>
          <div>
            <SignInButton
              onSuccess={({ fid, username }) =>
                console.log(`Hello, ${username}! Your fid is ${fid}.`)
              }
            />
            {isAuthenticated && <a>{displayName}</a>}
          </div>
        </main>
      </ThemeProvider>
    </AuthKitProvider>
  );
}
