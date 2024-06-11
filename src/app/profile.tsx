import { useProfile } from "@farcaster/auth-kit";
import UserDetails from "./components/UserDetails";

function Profile() {
  const profile = useProfile();
  const {
    isAuthenticated,
    profile: { fid, displayName, custody },
  } = profile;

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
          <UserDetails fid={fid} />
        </div>
      )}
    </div>
  );
}

export default Profile;
