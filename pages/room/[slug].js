import { chatRooms } from "../../data/chatRooms";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function Room({ room }) {
  async function sendMessage(roomId, user, text) {
    try {
      await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        text: text.trim(),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return <div>{room.title}</div>;
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const room = chatRooms.find((room) => room.id === slug);

  return {
    props: {
      room,
    },
  };
}
