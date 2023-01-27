import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Authentication } from "../firebase";
import { useEffect } from "react";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
  }

  useEffect(() => {}, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Profile;
