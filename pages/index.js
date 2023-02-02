import useUser from "../hooks/useUser";

import Header from "../components/Header";
import Search from "../components/Search";
import { chatRooms } from "../data/chatRooms";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  const [photoURL, uid, userName] = user;

  return (
    <main className="w-full mt-5">
      <Header photoURL={photoURL} />
      <div className="flex justify-between max-w-[1100px] mx-auto">
        <div>
          <div className="space-y-10">
            <Search />
            <div className="p-5 w-80 bg-[#0D0D0D] rounded-xl text-gray-300">
              <h1 className="font-semibold text-lg mb-5">Groups</h1>

              <div className="flex flex-col">
                {chatRooms.map((room) => {
                  return (
                    <div key={room.id} className="flex">
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
        <div className="p-5 w-[750px] bg-[#0D0D0D] rounded-xl text-gray-300">
          <h1 className="font-semibold text-lg mb-5">Chats</h1>
        </div>
      </div>
    </main>
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
