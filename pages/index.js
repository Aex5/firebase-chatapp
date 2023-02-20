import useUser from "../hooks/useUser";

import Layout from "../components/Layout";
import { chatRooms } from "../data/chatRooms";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  const [photoURL, uid, userName] = user;

  return (
    <Layout photoURL={photoURL}>
      <main className="w-full">
        <div className="flex justify-between max-w-[1000px] mx-auto pt-16 gap-5">
          <div>
            <div className="space-y-10">
              <div className="py-5 w-80 bg-[#EAEAEA] rounded-xl text-[#3C4048] shadow-xl border-2">
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

          {/* chat box */}
          <div className="px-10 w-[750px] h-[30rem] text-[#3C4048]">
            <h1 className="font-semibold text-2xl mb-5 ">
              Hello {userName} !!
            </h1>
            <p>
              kok masih sepi ya? <br />
              kamu bisa mulai chatting... ya walaupun kamu ga penting sihh
            </p>
          </div>
        </div>
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
