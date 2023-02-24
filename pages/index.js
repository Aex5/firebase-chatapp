import useUser from "../hooks/useUser";

import Layout from "../components/Layout";
import { chatRooms } from "../data/chatRooms";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
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
          <div className="max-w-[1000px] mx-auto pt-16 gap-5">
            <h1 className="text-sm text-[#00ABB3] py-4">LAWAK CHAT</h1>
            <h3 className="text-[34px]">
              Sebuah Aplikasi Chat Yang Saya Buat Dikala Saya Gabut
            </h3>
            <p className="text-lg text-[#3C4048] py-4 font-light">
              Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
              tidak lupa jasa pahlawan!
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="px-8 py-3 text-[#00ABB3] bg-slate-200 rounded-md mr-3 hover:bg-slate-100 duration-200"
              >
                Learn More
              </Link>
              <Link
                href="/chat"
                className="px-8 py-3 text-white bg-[#00ABB3] rounded-md mr-3 hover:bg-[#20868b] duration-200"
              >
                Chat &#8594;
              </Link>
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
