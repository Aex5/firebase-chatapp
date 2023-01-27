import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <main className="w-full mt-5">
      <Header />
      <div className="max-w-[1100px] mx-auto">
        <div className="space-y-10">
          <div className="flex items-center px-2 w-80 h-10 bg-[#0D0D0D] rounded-xl">
            <FiSearch className="text-gray-300 text-xl" />
          </div>

          <div className="px-2 w-80 bg-[#0D0D0D] rounded-xl text-gray-300">
            <h1>Groups</h1>
            <div>
              <div className="w-10 h-10 rounded-full bg-white"></div>
            </div>
          </div>
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
