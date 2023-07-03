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
const settingsModel = require("../models/settings");
const settingsResponse = require("../network/response");
exports.getSettings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resDb = yield settingsModel.findOne({}).select("-_id");
        if (resDb == null) {
            settingsResponse.error(req, res, "not found", 404, `no existe una configuracion guardada`);
        }
        else {
            settingsResponse.successGet(req, res, resDb, 200);
        }
    }
    catch (err) {
        settingsResponse.error(req, res, "Error obtener configuracion", 400, err);
    }
});
// exports.getProduct = async (req: any, res: any) => {
//   try {
//     const { codigo } = req.query;
//     const resDb = await model
//       .findOne({ codigo })
//       .select("-_id codigo nombre precio");
//     if (resDb == null) {
//       response.error(req, res, "not found", 404, `no existe ${req.body} en db`);
//     } else {
//       response.successGet(req, res, resDb, 200);
//     }
//   } catch (err) {
//     response.error(req, res, "failed to obtained", 400, err);
//   }
// };
// exports.putProduct = async (req: any, res: any) => {
//   try {
//     const { codigo } = req.query;
//     const newData = req.body;
//     const resDb = await model.updateOne({ codigo }, newData);
//     if (resDb.modifiedCount > 0) {
//       response.successUpdate(req, res, resDb, 200);
//     } else {
//       response.error(req, res, "no match found", 400, resDb);
//     }
//   } catch (err) {
//     // no se en que situacion podria irse al catch tengo que averiguar
//     response.error(req, res, "failed to update", 400);
//   }
// };
exports.createOrUpdateSettings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("entro");
        const existingSettings = yield settingsModel.findOne();
        const newData = req.body;
        if (existingSettings) {
            const resDb = yield settingsModel.updateOne({ codigoUnico: 1 }, newData);
            settingsResponse.successUpdate(req, res, resDb, 201);
        }
        else {
            const resDb = yield settingsModel.create(Object.assign({ codigoUnico: 1 }, newData));
            settingsResponse.successCreate(req, res, resDb, 201);
        }
    }
    catch (error) {
        settingsResponse.error(req, res, "failed to create or update", 400, error);
    }
});
// exports.deleteProduct = async (req: any, res: any) => {
//   try {
//     const { codigo } = req.query;
//     const resDb = await model.deleteOne({ codigo });
//     if (resDb.deletedCount > 0) {
//       response.successDelete(req, res, resDb, 200);
//     } else {
//       response.error(req, res, "no match found", 400);
//     }
//   } catch (err) {
//     // no se en que situacion podria irse al catch tengo que averiguar
//     response.error(req, res, "failed to update", 400);
//   }
// };
