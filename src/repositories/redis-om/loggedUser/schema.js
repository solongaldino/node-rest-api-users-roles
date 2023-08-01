const { Schema } = require("redis-om");

module.exports = new Schema("LoggedUser", {
  id: { type: "number" },
  name: { type: "string" },
  email: { type: "string" },
  created_at: { type: "date" },
  id: { type: "number", path: "$.roles[*].id" },
  value: { type: "string", path: "$.roles[*].value" },
  created_at: { type: "date", path: "$.roles[*].created_at" },
});
