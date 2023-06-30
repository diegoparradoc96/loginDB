"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const billsModel = require("../models/bills");
const billsResponse = require("../network/response");
exports.getBills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resDb = yield billsModel.find({}).select("-_id");
        billsResponse.successGet(req, res, resDb, 200);
    }
    catch (err) {
        billsResponse.error(req, res, "Error obtener productos", 400, err);
    }
});
exports.getBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.query;
        const resDb = yield model
            .findOne({ codigo })
            .select("-_id codigo nombre precio");
        if (resDb == null) {
            response.error(req, res, "not found", 404, `no existe ${req.body} en db`);
        }
        else {
            response.successGet(req, res, resDb, 200);
        }
    }
    catch (err) {
        response.error(req, res, "failed to obtained", 400, err);
    }
});
exports.putBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { remision } = req.query;
        const newData = req.body;
        const resDb = yield billsModel.updateOne({ remision }, newData);
        if (resDb.modifiedCount > 0) {
            billsResponse.successUpdate(req, res, resDb, 200);
        }
        else {
            billsResponse.error(req, res, "no match found", 400, resDb);
        }
    }
    catch (err) {
        // no se en que situacion podria irse al catch tengo que averiguar
        billsResponse.error(req, res, "failed to update", 400);
    }
});
exports.postBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const resDb = yield billsModel.create(data);
        billsResponse.successCreate(req, res, resDb, 201);
    }
    catch (err) {
        if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
            billsResponse.error(req, res, "duplicate key", 400, err);
        }
        else {
            billsResponse.error(req, res, "failed to create", 400, err);
        }
    }
});
exports.deleteBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { remision } = req.query;
        const resDb = yield billsModel.deleteOne({ remision });
        if (resDb.deletedCount > 0) {
            billsResponse.successDelete(req, res, resDb, 200);
        }
        else {
            billsResponse.error(req, res, "no match found", 400);
        }
    }
    catch (error) {
        // no se en que situacion podria irse al catch tengo que averiguar
        billsResponse.error(req, res, "failed to delete", 400, error);
    }
});
exports.getLastBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resDb = yield billsModel
            .findOne()
            .sort({ remision: -1 })
            .select("-_id");
        if (!resDb) {
            billsResponse.error(req, res, "No existen facturas guardadas", 400, resDb);
        }
        else {
            billsResponse.successGet(req, res, resDb, 200);
        }
    }
    catch (error) {
        billsResponse.error(req, res, "Error al obtener la ultima factura", 400, error);
    }
});
exports.getDateBills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { month, year } = req.query;
        console.log("month year: ", month, year);
        const regex = new RegExp(`${year}-${month}-\\d{2}`);
        const resDb = yield billsModel.find({
            fechaProcedimiento: { $regex: regex, $options: "i" },
        });
        billsResponse.successGet(req, res, resDb, 200);
    }
    catch (error) {
        billsResponse.error(req, res, "Error obtener productos", 400, error);
    }
});
