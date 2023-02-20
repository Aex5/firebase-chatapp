import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoNotificationsSharp, IoExit } from "react-icons/io5";

const Header = ({ photoURL }) => {
  return (
    <nav className="w-20 inset-y-5 left-5 bg-[#3C4048] fixed rounded-xl z-10">
      <main className="h-full flex flex-col items-center justify-around gap-20 pt-10">
        <div>
          <Link href="/profile">
            {photoURL && (
              <Image
                src={photoURL}
                alt=""
                height={50}
                width={50}
                className="rounded-full"
              />
            )}
          </Link>
        </div>

        {/* menu */}
        <div className="h-full flex flex-col items-center justify-start gap-10">
          <Link href="/">
            <AiFillHome className="text-white text-3xl" />
          </Link>
          <Link href="/chat">
            <BsFillChatDotsFill className="text-white text-3xl" />
          </Link>
          <Link href="/notification">
            <IoNotificationsSharp className="text-white text-3xl" />
          </Link>
        </div>

        <div className="mb-10">
          <Link href="/">
            <IoExit className="text-white text-3xl" />
          </Link>
        </div>
      </main>
    </nav>
  );
};

export default Header;
