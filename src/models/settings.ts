import mongoose from "mongoose";

const SettingsSCheme = new mongoose.Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("settings", SettingsSCheme);
