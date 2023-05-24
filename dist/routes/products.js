"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = require("../controllers/products");
const router = express_1.default.Router();
const path = "product";
router.get(`/${path}`, controller.getProducts);
router.post(`/${path}`, controller.postProduct);
module.exports = router;
