const express = require("express");
const app = express();
const cinemaDb = require("./db/cinema/cinema")

app.get("/allCinemas", async (req, res) => {
  const allCinemas = await cinemaDb.getAllCinemas();
  res.status(200).json({ allCinemas });
});

app.listen(3000, () => console.log("server is runnng on port 3000"));
