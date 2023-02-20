export default function handler(req, res) {
  res.status(200).json([
    { id: "fr", title: "Friends Reuinions", desc: "Reunions with friends" },
    { id: "md", title: "Muria Dev", desc: "Muria Dev Chat" },
  ]);
}
