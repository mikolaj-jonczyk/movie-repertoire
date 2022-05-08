const knex = require("../knex");

function getAllCinemas() {
  return knex("cinema").select("*");
}

function getCinemaById(id) {
  return knex("cinema").where("id", id);
}

function getCinemaByName(name) {
  return knex("cinema").where("name", 'like', `%${name}%`);
}

module.exports = {
  getAllCinemas,
  getCinemaById,
  getCinemaByName,
}