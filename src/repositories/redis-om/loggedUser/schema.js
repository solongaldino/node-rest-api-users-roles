const { Schema } = require("redis-om");

module.exports = new Schema("LoggedUser", {
  id: { type: "number" },
  name: { type: "string" },
});
