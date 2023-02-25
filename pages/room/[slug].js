import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import "firebase/firestore";
import { chatRooms } from "../../data/chatRooms";

import useUser from "../../hooks/useUser";
import Layout from "../../components/Layout";
import Image from "next/image";
import { IoPaperPlaneSharp } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Room({ room }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const user = useUser();
  const [photoURL, uid, userName] = user;

  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, "chat-room", room.id, "messages"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  const addData = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "chat-room", room.id, "messages"), {
        uid: uid,
        displayName: userName,
        photoURL: photoURL,
        text: text,
        timestamp: serverTimestamp(),
      });
      setText("");
      window.scrollTo(0, document.body.scrollHeight);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout photoURL={photoURL}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className="w-full py-20 px-5">
          <div className="max-w-[1000px] mx-auto ">
            <h2 className="text-center text-xl font-semibold text-[#5d626b] py-10">
              {room.title}
            </h2>
            <div>
              {messages.map((m) => {
                return (
                  <div key={m.id}>
                    <div
                      className={`w-full flex items-center space-x-2 my-2 sm:space-x-3.5 ${
                        uid === m.uid
                          ? "flex-row-reverse space-x-reverse sm:space-x-reverse"
                          : "flex-row"
                      }`}
                    >
                      <Image
                        src={m.photoURL}
                        width={40}
                        height={40}
                        className="lg:w-12 rounded-full object-cover"
                      />
                      <span
                        className={`text-xs sm:text-sm font-semibold text-[#5d626b]`}
                      >
                        {m.displayName}
                      </span>
                    </div>
                    <div
                      className={`w-72 rounded-b-xl p-2 sm:p-4 ${
                        uid === m.uid
                          ? " rounded-l-xl bg-[#00ABB3] text-white ml-auto"
                          : "rounded-r-xl bg-white text-gray-800"
                      }`}
                    >
                      <p className="w-full break-words text-[#292a2e]">
                        {m.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <div className="w-full bg-[#F0EEED] px-5 fixed bottom-0">
          <form
            onSubmit={addData}
            className="max-w-[1000px] mx-auto flex mt-10 relative bottom-5"
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-10 p-5 outline-none rounded-lg break-words"
            />
            <button type="submit" className="absolute right-5 translate-y-3">
              <IoPaperPlaneSharp className="w-6 h-6 text-[#00ABB3] z-10" />
            </button>
          </form>
        </div>
      </motion.div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.params.slug;
  const room = chatRooms.find((room) => room.id === slug);

  const token = ctx.req.cookies.Token;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/register",
        permanent: false,
      },
    };
  }

  return {
    props: {
      room,
    },
  };
}
