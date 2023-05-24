const model = require("../models/products");
const response = require("../network/response");

exports.getProducts = async (req: any, res: any) => {
  try {
    const resDb = await model.find({}).select("-_id codigo nombre precio");

    response.successGet(req, res, resDb, 200);
  } catch (err) {
    response.error(req, res, "Error obtener productos", 400, err);
  }
};

exports.getProduct = async (req: any, res: any) => {
  try {
    const { codigo } = req.query;

    const resDb = await model
      .findOne({ codigo })
      .select("-_id codigo nombre precio");

    if (resDb == null) {
      response.error(req, res, "not found", 404, `no existe ${req.body} en db`);
    } else {
      response.successGet(req, res, resDb, 200);
    }
  } catch (err) {
    response.error(req, res, "failed to obtained", 400, err);
  }
};

exports.putProduct = async (req: any, res: any) => {
  try {
    const { codigo } = req.query;
    const newData = req.body;

    const resDb = await model.updateOne({ codigo }, newData);

    if (resDb.modifiedCount > 0) {
      response.successUpdate(req, res, resDb, 200);
    } else {
      response.error(req, res, "failed to update", 400);
    }
  } catch (err) {
    // no se en que situacion podria irse al catch tengo que averiguar
    response.error(req, res, "failed to update", 400);
  }
};

exports.postProduct = async (req: any, res: any) => {
  try {
    const data = req.body;
    const resDb = await model.create(data);

    response.successCreate(req, res, resDb, 201);
  } catch (err) {
    response.error(req, res, "failed to create", 400, err);
  }
};

exports.deleteProduct = async (req: any, res: any) => {
  try {
    const { codigo } = req.query;

    const resDb = await model.deleteOne({ codigo });

    if (resDb.deletedCount > 0) {
      response.successDelete(req, res, resDb, 200);
    } else {
      response.error(req, res, "failed to deleted", 400);
    }
  } catch (err) {
    // no se en que situacion podria irse al catch tengo que averiguar
    response.error(req, res, "failed to update", 400);
  }
};
