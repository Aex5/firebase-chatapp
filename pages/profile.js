import useUser from "../hooks/useUser";
import Header from "../components/Header";

const Profile = () => {
  const userCtx = useUser();
  const [photoURL, uid, userName] = userCtx;

  return (
    <div>
      <Header photoURL={photoURL} />
    </div>
  );
};

export default Profile;
