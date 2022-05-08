const express = require("express");
const app = express();
const cinemaDb = require("./db/cinema/cinema");
const movieDb = require("./db/movie/movie");
const repertoireDb = require("./db/repertoire/repertoire");

app.get("/cinemas", async (req, res) => {
  const allCinemas = await cinemaDb.getAllCinemas();
  res.status(200).json({ allCinemas });
});

app.get("/cinema/:id", async (req, res) => {
  const cinema = await cinemaDb.getCinemaById(req.params.id);
  res.status(200).json({ cinema });
});

app.get("/cinema/name/:name", async (req, res) => {
  const cinemas = await cinemaDb.getCinemaByName(req.params.name);
  res.status(200).json({ cinemas });
});

app.get("/movies", async (req, res) => {
  const allMovies = await movieDb.getAllMovies();
  res.status(200).json({ allMovies });
});

app.get("/movie/:id", async (req, res) => {
  const movie = await movieDb.getMovieById(req.params.id);
  res.status(200).json({ movie });
});

app.get("/movie/name/:name", async (req, res) => {
  const movies = await movieDb.getMovieByName(req.params.name);
  res.status(200).json({ movies });
});

app.get("/repertoire/movie/:id/date/:date", async (req, res) => {
  const movies = await repertoireDb.getRepertoireByMovieId(req.params.id, req.params.date);
  res.status(200).json({ movies });
});

app.get("/repertoire/cinema/:id/date/:date", async (req, res) => {
  const movies = await repertoireDb.getRepertoireByCinemaId(req.params.id, req.params.date);
  res.status(200).json({ movies });
});



app.listen(3000, () => console.log("server is runnng on port 3000"));
