"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsRoutes = require("../routes/products");
const billsRoutes = require("../routes/bills");
const settingsRoutes = require("../routes/settings");
const routes = (server) => {
    server.use(productsRoutes);
    server.use(billsRoutes);
    server.use(settingsRoutes);
};
module.exports = routes;
