import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, photoURL }) {
  return (
    <>
      <Header photoURL={photoURL} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
