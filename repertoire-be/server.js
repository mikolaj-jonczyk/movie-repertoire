const express = require("express");
var cors = require('cors');
const app = express();
const cinemaDb = require("./db/cinema/cinema");
const movieDb = require("./db/movie/movie");
const repertoireDb = require("./db/repertoire/repertoire");

app.use(cors());

app.get("/cinemas", async (req, res) => {
  res.status(200).json(await cinemaDb.getAllCinemas());
});

app.get("/cinema/:id", async (req, res) => {
  res.status(200).json(await cinemaDb.getCinemaById(req.params.id));
});

app.get("/cinema/name/:name", async (req, res) => {
  res.status(200).json(await cinemaDb.getCinemaByName(req.params.name));
});

app.get("/movies", async (req, res) => {
  res.status(200).json(await movieDb.getAllMovies());
});

app.get("/movie/:id", async (req, res) => {
  res.status(200).json(await movieDb.getMovieById(req.params.id));
});

app.get("/movie/name/:name", async (req, res) => {
  res.status(200).json(await movieDb.getMovieByName(req.params.name));
});

app.get("/repertoire/movie/:id", async (req, res) => {
  res.status(200).json(await repertoireDb.getRepertoireByMovieId(req.params.id));
});

app.get("/repertoire/cinema/:id", async (req, res) => {
  res.status(200).json(await repertoireDb.getRepertoireByCinemaId(req.params.id));
});



app.listen(3000, () => console.log("server is runnng on port 3000"));
