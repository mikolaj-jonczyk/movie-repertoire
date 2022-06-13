const knex = require("../knex");

function getAllCinemas() {
  return knex("cinema").select("*");
}

function getCinemaById(id) {
  return knex("cinema").where("id", id).first();
}

function getCinemaByName(name) {
  return knex("cinema").where("name", 'like', `%${name}%`);
}

async function createCinema(cinema){
  return knex("cinema").insert({
    name: cinema.name,
    address: cinema.address,
    email: cinema.email,
    mobile: cinema.mobile
  });
}

module.exports = {
  getAllCinemas,
  getCinemaById,
  getCinemaByName,
  createCinema
}