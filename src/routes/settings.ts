import express from "express";

const controller = require("../controllers/settings");

const router = express.Router();

router.post(`/createOrUpdateSettings`, controller.createOrUpdateSettings);
router.get(`/settings`, controller.getSettings);

module.exports = router;
