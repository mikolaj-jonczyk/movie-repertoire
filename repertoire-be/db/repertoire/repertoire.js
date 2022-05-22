const knex = require("../knex");

function getRepertoireByMovieId(id) {
  return knex("repertoire").leftJoin("movie", "repertoire.movie_id", "movie.id")
  .leftJoin("cinema", "repertoire.cinema_id", "cinema.id").where("movie_id", id);
}

function getRepertoireByCinemaId(id) {
  return knex("repertoire").leftJoin("cinema", "repertoire.cinema_id", "cinema.id")
  .leftJoin("movie", "repertoire.movie_id", "movie.id").where("cinema_id", id);
}

module.exports = {
  getRepertoireByMovieId,
  getRepertoireByCinemaId,
}