"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsRoutes = require("../routes/products");
const routes = (server) => {
    server.use(productsRoutes);
};
module.exports = routes;
