const knex = require("../knex");

function getRepertoireByMovieId(id, data) {
  return knex("repertoire").leftJoin("movie", "repertoire.movie_id", "movie.id")
  .leftJoin("cinema", "repertoire.cinema_id", "cinema.id").where("movie_id", id).andWhereLike('data', `%${data}%`);
}

function getRepertoireByCinemaId(id, data) {
  return knex("repertoire").leftJoin("movie", "repertoire.movie_id", "movie.id")
  .leftJoin("cinema", "repertoire.cinema_id", "cinema.id").where("cinema_id", id).andWhereLike('data', `%${data}%`);
}

module.exports = {
  getRepertoireByMovieId,
  getRepertoireByCinemaId,
}