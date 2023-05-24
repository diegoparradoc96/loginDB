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
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docs = yield model.find({});
        res.send({
            docs,
        });
    }
    catch (err) {
        console.error("DB: ERROR: ", err);
    }
});
exports.postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const resPost = yield model.create(data);
        res.send({
            data: resPost,
        });
    }
    catch (err) {
        if (err) {
            res.send({ error: "Error: " }, 422);
        }
    }
});
