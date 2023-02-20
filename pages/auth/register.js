import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../../firebase";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { useState } from "react";

import Image from "next/image";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  function handleSignUp(e) {
    const auth = getAuth(app);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("you are registered successfully");
        cookie.set("Token", userCredential.user.uid);
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" rounded lg:w-1/3  md:w-1/2 w-full p-10">
        <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
          Login to your account
        </p>
        <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
          Dont have account?{" "}
          <a className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer">
            Sign up here
          </a>
        </p>
        <button
          onClick={signInWithGoogle}
          className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500 py-3.5 px-4 border rounded-lg border-gray-300 flex items-center w-full mt-10"
        >
          <Image
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
            alt="google"
            width={20}
            height={20}
          />
          <p className="text-base font-medium ml-4 text-gray-700">
            Continue with Google
          </p>
        </button>
        <button
          onClick={signInWithGithub}
          className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500 py-3.5 px-4 border rounded-lg border-gray-300 flex items-center w-full mt-4"
        >
          <Image
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
            alt="github"
            width={20}
            height={20}
          />
          <p className="text-base font-medium ml-4 text-gray-700">
            Continue with Github
          </p>
        </button>
        <button className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-500 py-3.5 px-4 border rounded-lg border-gray-300 flex items-center w-full mt-4">
          <Image
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg"
            alt="twitter"
            width={20}
            height={20}
          />
          <p className="text-base font-medium ml-4 text-gray-700">
            Continue with Twitter
          </p>
        </button>
        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />
          <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
            OR
          </p>
          <hr className="w-full bg-gray-400  " />
        </div>
        <form onSubmit={handleSignUp}>
          <div>
            <label className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-gray-200 border rounded-lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-gray-200 border rounded-lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-400 border rounded-lg hover:bg-blue-500 py-4 w-full"
            >
              Create my account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const token = ctx.req.headers.cookie;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
