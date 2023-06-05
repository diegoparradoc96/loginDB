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
const model = require("../models/products");
const response = require("../network/response");
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resDb = yield model.find({}).select("-_id codigo nombre precio");
        response.successGet(req, res, resDb, 200);
    }
    catch (err) {
        response.error(req, res, "Error obtener productos", 400, err);
    }
});
exports.getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.query;
        const newData = req.body;
        const resDb = yield model.updateOne({ codigo }, newData);
        if (resDb.modifiedCount > 0) {
            response.successUpdate(req, res, resDb, 200);
        }
        else {
            response.error(req, res, "no match found", 400, resDb);
        }
    }
    catch (err) {
        // no se en que situacion podria irse al catch tengo que averiguar
        response.error(req, res, "failed to update", 400);
    }
});
exports.postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const resDb = yield model.create(data);
        response.successCreate(req, res, resDb, 201);
    }
    catch (err) {
        if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
            console.log("el errorsito: ", err);
            response.error(req, res, "duplicate key", 400, err);
        }
        else {
            response.error(req, res, "failed to create", 400, err);
        }
    }
});
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.query;
        const resDb = yield model.deleteOne({ codigo });
        if (resDb.deletedCount > 0) {
            response.successDelete(req, res, resDb, 200);
        }
        else {
            response.error(req, res, "no match found", 400);
        }
    }
    catch (err) {
        // no se en que situacion podria irse al catch tengo que averiguar
        response.error(req, res, "failed to update", 400);
    }
});
