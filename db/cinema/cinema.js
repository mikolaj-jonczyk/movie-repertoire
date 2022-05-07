const knex = require("../knex");

function getAllCinemas() {
  return knex("cinema").select("*");
}

function getCinema(name) {
  return knex("cinema").where("name", name).select("*");
}

module.exports = {
  getAllCinemas,
  getCinema
}