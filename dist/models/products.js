"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductsSCheme = new mongoose_1.default.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = mongoose_1.default.model("products", ProductsSCheme);
