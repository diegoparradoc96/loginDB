"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BillsSCheme = new mongoose_1.default.Schema({
    remision: {
        type: Number,
        required: true,
        unique: true,
    },
    fechaProcedimiento: {
        type: String,
        required: true,
    },
    nombrePaciente: {
        type: String,
        required: true,
    },
    cedulaPaciente: {
        type: String,
        required: true,
    },
    aseguradoraPaciente: {
        type: String,
        required: true,
    },
    estadoPaciente: {
        type: String,
        required: true,
    },
    tipoProcedimiento: {
        type: String,
        required: true,
    },
    complejidadCuracion: {
        nivelComplejidad: {
            type: String,
            required: false,
        },
        precio: {
            type: Number,
            required: false,
        },
    },
    profesionalEncargado: {
        type: String,
        required: true,
    },
    gastoPaciente: [
        {
            codigo: {
                type: String,
                required: true,
            },
            nombreProducto: {
                type: String,
                required: true,
            },
            cantidad: {
                type: Number,
                required: true,
            },
            precioTotal: {
                type: Number,
                required: true,
            },
        },
    ],
    totalFacturado: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = mongoose_1.default.model("bills", BillsSCheme);
