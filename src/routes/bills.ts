import express from "express";

const controller = require("../controllers/bills");

const router = express.Router();

router.get(`/bills`, controller.getBills);
router.get(`/bill`, controller.getBill);
router.put(`/bill`, controller.putBill);
router.post(`/bill`, controller.postBill);
router.delete(`/bill`, controller.deleteBill);
router.get(`/lastBill`, controller.getLastBill);
router.get(`/datesBills`, controller.getDateBills);

module.exports = router;
