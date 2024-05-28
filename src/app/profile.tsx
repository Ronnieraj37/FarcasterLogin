import { useProfile } from "@farcaster/auth-kit";
import { useEffect } from "react";

function Profile() {
  const profile = useProfile();
  const {
    isAuthenticated,
    profile: { fid, displayName, custody },
  } = profile;
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <div style={{ color: "black" }}>
      {isAuthenticated && (
        <div>
          <p>
            Hello, {displayName}! Your FID is {fid}.
          </p>
          <p>
            Your custody address is: <pre>{custody}</pre>
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
