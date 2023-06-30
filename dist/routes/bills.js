"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = require("../controllers/bills");
const router = express_1.default.Router();
router.get(`/bills`, controller.getBills);
router.get(`/bill`, controller.getBill);
router.put(`/bill`, controller.putBill);
router.post(`/bill`, controller.postBill);
router.delete(`/bill`, controller.deleteBill);
router.get(`/lastBill`, controller.getLastBill);
router.get(`/datesBills`, controller.getDateBills);
module.exports = router;
