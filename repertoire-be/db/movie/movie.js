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

async function createMovie(movie){
  return knex("movie").insert({
    name: movie.name,
    description: movie.description,
    actors: movie.actors,
    director: movie.director,
    image: movie.image,    
  });
}

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByName,
  createMovie,
}