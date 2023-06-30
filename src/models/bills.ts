import mongoose from "mongoose";

const BillsSCheme = new mongoose.Schema(
  {
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
    tipoDeCuracion: {
      type: String,
      required: false,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("bills", BillsSCheme);
