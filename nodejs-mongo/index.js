const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api", routes);

    app.listen(8080, () => {
      console.log("Server has started on port 8080!");
    });
  });
