import express, { Request, Response } from "express";

const productsRoutes = require("../routes/products");

const routes = (server: any) => {
  server.use(productsRoutes);
};

module.exports = routes;
