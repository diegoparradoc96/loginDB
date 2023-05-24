import express from "express";

const controller = require("../controllers/products");

const router = express.Router();

router.get(`/products`, controller.getProducts);
router.get(`/product`, controller.getProduct);
router.put(`/product`, controller.putProduct);
router.post(`/product`, controller.postProduct);
router.delete(`/product`, controller.deleteProduct);

module.exports = router;
