import useUser from "../hooks/useUser";
import Header from "../components/Header";

const Profile = () => {
  const userCtx = useUser();
  const [photoURL] = userCtx;

  return (
    <div>
      <Header photoURL={photoURL} />
      <p className="text-center text-zinc-500 pt-72">
        kapan kapan ajah tak buat user profile edit
      </p>
    </div>
  );
};

export default Profile;
