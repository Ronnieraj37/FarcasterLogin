"use client";
import { useState } from "react";

const LoginHook = () => {
  const [data, setData] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return { data, setLoading, isLoading, error };
};

export default LoginHook;
