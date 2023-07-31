const { Schema } = require("redis-om");

module.exports = new Schema("LoggedUser", {
  name: { type: "string" },
});
