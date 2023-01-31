export default function handler(req, res) {
  res.status(200).json([
    { id: "fr", title: "Friends Reuinions" },
    { id: "md", title: "Muria Dev" },
  ]);
}
