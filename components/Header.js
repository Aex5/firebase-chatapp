import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInbox } from "react-icons/fa";
import Link from "next/link";
import useUser from "../hooks/useUser";
import Image from "next/image";

export default function Header() {
  const user = useUser();
  const [photoURL, uid, userName] = user;

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-5 bg-[#F0EEED] text-[#557B83] bg-opacity-80 backdrop-blur-md border-t-4te border-[#00ABB3] z-50">
      {/* menu */}
      <div className="md:w-full md:max-w-[1000px] md:mx-auto md:flex md:items-center md:justify-between">
        <div className="hidden md:block">
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
        <div className="hidden md:flex md:justify-between md:gap-10">
          <Link href="/">Home</Link>

          <Link href="/chat">Chat</Link>

          <Link href="/">Notification</Link>
        </div>

        <div>
          <button className="hidden md:block md:bg-rose-600 py-2 px-4 rounded-lg text-[#ffffff]">
            Sign Out
          </button>
        </div>
      </div>
      {/* hummberger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-72 bg-[#F6F5F5] flex flex-col justify-center items-center "
        }
      >
        <div className="absolute top-5 left-5 flex items-center gap-2">
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

        <div className="flex flex-col items-center gap-5 absolute top-20">
          <Link onClick={handleClick} href="/">
            Home
          </Link>

          <Link onClick={handleClick} href="/chat">
            Chat
          </Link>

          <Link onClick={handleClick} href="/">
            Notification
          </Link>

          <div>
            <button
              onClick={handleClick}
              className="bg-rose-600 py-1 px-2 rounded-md text-[#ffffff]"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <nav className="w-full bg-[#3C4048] fixed z-10">
//   <main className="h-20 max-w-[1000px] mx-auto text-[#b1b5bd] font-semibold flex items-center justify-between ">
//     <div>
//       <Link href="/profile">
//         {photoURL && (
//           <Image
//             src={photoURL}
//             alt=""
//             height={50}
//             width={50}
//             className="rounded-full"
//           />
//         )}
//       </Link>
//     </div>

//     {/* menu */}
//     <div className="flex items-center justify-start gap-10">
//       <Link href="/">Home</Link>
//       <Link href="/chat">Chat</Link>
//       <Link href="/notification">Notification</Link>
//     </div>

//     <div>
//       <Link href="/">Sign Out</Link>
//     </div>
//   </main>
// </nav>
