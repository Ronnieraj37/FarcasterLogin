"use client";
import Auth from "./Auth";
import Feed from "./feed";
import LoginHook from "./hooks/LoginHook";
export default function Home() {
  const { isLoading, setLoading } = LoginHook();
  return (
    <div className="bg-white min-h-screen items-end">
      <Auth setLoading={setLoading} />
      {isLoading ? (
        <p className="text-black w-full h-full text-xl items-center justify-center flex">
          Click on the SignIn button
        </p>
      ) : (
        <Feed />
      )}
    </div>
  );
}
