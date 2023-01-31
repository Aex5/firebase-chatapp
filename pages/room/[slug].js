import { chatRooms } from "../../data/chatRooms";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const room = chatRooms.find((room) => room.id === slug);

  return {
    props: {
      room,
    },
  };
}

export default function Room({ room }) {
  return <div>{room.title}</div>;
}
