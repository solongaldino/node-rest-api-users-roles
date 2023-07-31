const { Repository, Client } = require("redis-om");

module.exports = async (schema) => {

  const conn = await new Client().open();

  const repository = new Repository(schema, conn);

  await repository.createIndex();

  return repository;
}
