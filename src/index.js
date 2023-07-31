const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { ExpressMiddleware } = require("./middlewares");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);

app.use(ExpressMiddleware.errorHandler);

const serverPort = 3333;

app.listen(serverPort, () =>
  console.info(`Server is running on PORT ${serverPort}`)
);
