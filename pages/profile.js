import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Authentication } from "../firebase";
import { useEffect } from "react";

const Profile = () => {
  const auth = getAuth();

  const initiateAuth = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in");
      } else {
        console.log("User is not signed in");
      }
    });
  };

  useEffect(() => {}, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Profile;
