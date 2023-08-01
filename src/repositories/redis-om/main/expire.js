const { EntityId } = require("redis-om");
const getRepository = require("./getRepository");

module.exports = async (schema, data, ttlInSeconds) => {
  const repository = await getRepository(schema);
  return await repository.expire(data[EntityId], ttlInSeconds);
};
