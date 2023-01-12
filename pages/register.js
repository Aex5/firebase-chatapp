import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { app } from "../firebase";
import { useRouter } from "next/router";
import cookie from "js-cookie";

export default function Register() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider).then(
        (res) => {
          cookie.set("Token", res.user.uid);
          router.push("/");
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGithub = async () => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider).then(
        (res) => {
          cookie.set("Token", res.user.uid);
          router.push("/");
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithFacebook = async () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider).then(
        (res) => {
          cookie.set("Token", res.user.uid);
          router.push("/");
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>test</button>
      <button onClick={signInWithGithub}>test github</button>
      <button onClick={signInWithFacebook}>test faceboook</button>
    </div>
  );
}
