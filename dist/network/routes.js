"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const message = require("../components/message/network");
const products = require("../routes/products");
const routes = (server) => {
    server.use(products);
};
module.exports = routes;
