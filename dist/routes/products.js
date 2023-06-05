"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = require("../controllers/products");
const router = express_1.default.Router();
router.get(`/products`, controller.getProducts);
router.get(`/product`, controller.getProduct);
router.put(`/product`, controller.putProduct);
router.post(`/product`, controller.postProduct);
router.delete(`/product`, controller.deleteProduct);
module.exports = router;
