const { ApiError } = require("../../utils");

const isDev = process.env.NODE_ENV === "development";
const isLocal = process.env.NODE_ENV === "local";

module.exports = (err, req, res, next) => {
  if (isLocal) {
    console.error(err);
  }

  if (err instanceof ApiError) {
    let response = { message: err.message };
    return res.status(err.statusCode).send(response);
  }

  return res.status(500).send({
    message: isDev || isLocal ? err.message : "Something went wrong",
  });
};