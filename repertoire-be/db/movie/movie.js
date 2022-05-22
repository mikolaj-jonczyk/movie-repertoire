const knex = require("../knex");

function getAllMovies() {
  return knex("movie").select("*");
}

function getMovieById(id) {
  return knex("movie").where("id", id).first();
}

function getMovieByName(name) {
  return knex("movie").where("name", 'like', `%${name}%`);
}

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByName,
}