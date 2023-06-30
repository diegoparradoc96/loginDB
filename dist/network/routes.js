"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsRoutes = require("../routes/products");
const billsRoutes = require("../routes/bills");
const routes = (server) => {
    server.use(productsRoutes);
    server.use(billsRoutes);
};
module.exports = routes;
