import useUser from "../hooks/useUser";

import Layout from "../components/Layout";
import { chatRooms } from "../data/chatRooms";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Chat() {
  const user = useUser();
  const [photoURL] = user;

  return (
    <Layout photoURL={photoURL}>
      <main className="w-full pt-10 px-5">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=" max-w-[1000px] mx-auto pt-16 gap-5">
            <div>
              <p className="text-center font-semibold text-lg text-[#3C4048] mb-2">
                Sabar Bang Direct Message Masih Nyusul
              </p>
              <div className="space-y-10">
                <div className="py-5 w-full bg-[#EAEAEA] rounded-xl text-[#3C4048] shadow-xl border-2">
                  <h1 className="pl-5 font-semibold text-lg mb-5">Groups</h1>

                  <div className="flex flex-col gap-5">
                    {chatRooms.map((room) => {
                      return (
                        <div
                          key={room.id}
                          className="flex justify-start items-center gap-5 py-3 pl-5 hover:bg-[#00ABB3] duration-200"
                        >
                          <div className="w-10 h-10 rounded-full bg-white"></div>
                          <Link href={`/room/${room.id}`}>{room.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
}

// redirect if token empty
export async function getServerSideProps(ctx) {
  const token = ctx.req.headers.cookie;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/register",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
