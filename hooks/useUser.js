import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Authentication } from "../firebase";

export default function AuthContext() {
  const auth = Authentication;
  const [userName, setUserName] = useState(null);
  const [uid, setUid] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUid(user.uid);
        setPhotoURL(user.photoURL);
      } else {
        setUser(null);
      }
    });
  }, []);

  return [photoURL, uid, userName];
}
