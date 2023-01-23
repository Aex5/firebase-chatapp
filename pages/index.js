export default function Home() {
  return (
    <div>
      <h1>ini adalah asd home</h1>
      <h1></h1>
    </div>
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
