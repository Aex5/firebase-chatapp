import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";
export default function Home() {
  return (
    <div>
      <h1>ini adalah asd home</h1>
    </div>
  );
}

// redirect if token empty
export async function getServerSideProps(ctx) {
  const token = ctx.req.headers.cookie;

  if (!token) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
