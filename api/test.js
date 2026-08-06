export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "Mehr Store API is running 🚀",
    author: "Kiya Azadfar"
  });
}
