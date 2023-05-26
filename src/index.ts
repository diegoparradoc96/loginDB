import express from "express";
import cors from "cors";
console.clear()

const initDB = require("./config/db");
const bodyParser = require("body-parser");
const router = require("./network/routes");

const app = express();

const port = 3000;

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
// cors para limitar acceso a la api
app.use(cors());

router(app);


app.listen(port, () => {
  console.log("La aplicacion esta en linea en el puerto 3000");
});

initDB();
