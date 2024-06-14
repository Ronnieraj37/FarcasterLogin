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
          <UserDetails fid={fid} />
        </div>
      )}
    </div>
  );
}

export default Profile;
