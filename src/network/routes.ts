import express, { Request, Response } from "express";

const productsRoutes = require("../routes/products");
const billsRoutes = require("../routes/bills");
const settingsRoutes = require("../routes/settings");

const routes = (server: any) => {
  server.use(productsRoutes);
  server.use(billsRoutes);
  server.use(settingsRoutes);
};

module.exports = routes;
