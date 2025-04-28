import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
