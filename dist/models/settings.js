"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SettingsSCheme = new mongoose_1.default.Schema({
    codigoUnico: {
        type: Number,
        required: true,
    },
    precioCuracionBajaComplejidad: {
        type: Number,
        required: true,
    },
    precioCuracionMedianaComplejidad: {
        type: Number,
        required: true,
    },
    precioCuracionAltaComplejidad: {
        type: Number,
        required: true,
    },
    precioValoracion: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = mongoose_1.default.model("settings", SettingsSCheme);
