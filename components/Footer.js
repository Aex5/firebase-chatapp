import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full text-center bg-[#eff1f3] dark:bg-[#0F172A] text-gray-500 py-10">
      <div className="w-full max-w-[1200px] mx-auto px-8 ">
        {/* build with */}
        <div className=" text-sm pt-10">
          <p>© 2022 Under MIT Licensed</p>
          <p className="pt-1">
            Build with <span className="text-pink-700">❤</span> by{" "}
            <span className="underline font-semibold text-cyan-700">
              <Link
                href="https://github.com/Sujaruu"
                target="_blank"
                rel="noreferrer"
              >
                Aditya Argadinata
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
