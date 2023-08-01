const { getRepository } = require("../main");
const schema = require("./schema");

module.exports = async (id) => {
  const repository = await getRepository(schema);
  return await repository.search().where("id").equals(id).return.all();
};
