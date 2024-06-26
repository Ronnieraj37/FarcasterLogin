import React from "react";
import Profile from "./profile";

import { ThemeProvider } from "next-themes";
import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider } from "@farcaster/auth-kit";
import { SignInButton } from "@farcaster/auth-kit";
const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: "example.com",
  siweUri: "https://example.com/login",
};
const Auth = ({ setLoading }: any) => {
  return (
    <AuthKitProvider config={config}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <main className="">
          <div className="p-4">
            <SignInButton
              onSuccess={({ fid, username }) => {
                console.log(`Hello, ${username}! Your fid is ${fid}.`);
                setLoading(false);
              }}
            />
            <Profile />
          </div>
        </main>
      </ThemeProvider>
    </AuthKitProvider>
  );
};

export default Auth;
