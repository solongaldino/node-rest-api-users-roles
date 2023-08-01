const { getRepository } = require("../main");
const schema = require("./schema");

module.exports = async (data) => {
  const repository = await getRepository(schema);
  return await repository.save(data);
};
