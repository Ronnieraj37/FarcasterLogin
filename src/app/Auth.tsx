"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider } from "@farcaster/auth-kit";
import Profile from "./profile";
import SignIn from "./SignIn";

const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: "example.com",
  siweUri: "https://example.com/login",
};
const Auth = () => {
  return (
    <AuthKitProvider config={config}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <main className="bg-white min-h-screen items-end">
          <div className="p-4">
            <SignIn />
            <Profile />
          </div>
        </main>
      </ThemeProvider>
    </AuthKitProvider>
  );
};

export default Auth;
