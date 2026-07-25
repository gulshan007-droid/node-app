import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! fghh");
});

app.listen(45000, () => {
  console.log("Server is running on port 45000");
});
