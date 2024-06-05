import React from "react";
import { SignInButton } from "@farcaster/auth-kit";

const SignIn = () => {
  return (
    <SignInButton
      onSuccess={({ fid, username }) => {
        console.log(`Hello, ${username}! Your fid is ${fid}.`);
      }}
    />
  );
};

export default SignIn;
