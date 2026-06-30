const express = require("express");
const { pool } = require("./db");
const itemsRouter = require("./routes/items");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", db: "connected" });
  } catch (err) {
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

app.get("/say-hi", (req, res) => {
  res.send("Hi");
});

app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
