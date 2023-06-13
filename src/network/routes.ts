import express, { Request, Response } from "express";

const productsRoutes = require("../routes/products");
const billsRoutes = require("../routes/bills");

const routes = (server: any) => {
  server.use(productsRoutes);
  server.use(billsRoutes);
};

module.exports = routes;
