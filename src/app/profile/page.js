import { UserAuth } from "../context/AuthContext";
import ProfileCard from "../components/navbar/ProfileCard";

const page = () => {
  const { user } = UserAuth();

  return (
    <div>
      {user ? <ProfileCard /> : <p>You must be logged in to view this.</p>}
    </div>
  );
};
export default page;
