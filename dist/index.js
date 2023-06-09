"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
console.clear();
const initDB = require("./config/db");
const bodyParser = require("body-parser");
const router = require("./network/routes");
const app = (0, express_1.default)();
const port = 3001;
// for parsing json
app.use(bodyParser.json({
    limit: "20mb",
}));
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
}));
// cors para limitar acceso a la api
app.use((0, cors_1.default)());
router(app);
app.listen(port, () => {
    console.log(`La aplicacion esta en linea en el puerto ${port}`);
});
initDB();
