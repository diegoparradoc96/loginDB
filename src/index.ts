import express from "express";
const initDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

const userRouters = require("./routes/user");
const itemsRouters = require("./routes/items");

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(userRouters);
app.use(itemsRouters);

app.listen(port, () => {
  console.log("La aplicacion esta en linea en el puerto 3000");
});

initDB();
