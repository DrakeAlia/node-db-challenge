const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
  addResource,
  findByResourcesId,
  findById,
};



function findByResourcesId(id) {
  return db
    .select("pr.project_id", "r.name")
    .from("resources as r")
    .join("project_resources as pr", "pr.resources_id", "=", "r.id")
    .where({ "pr.project_id": id });
}

function findById(id) {
  return db("resources").where("id", id).first();
}

function addResource(resources) {
  // adding resources.
  return db("resources")
    .insert(resources, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}