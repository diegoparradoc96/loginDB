const model = require("../models/user");

exports.getData = async (req: any, res: any) => {
  try {
    const docs = await model.find({});
    res.send({
      docs,
    });
  } catch (err) {
    console.error("DB: ERROR: ", err);
  }
};

exports.postData = async (req: any, res: any) => {
  try {
    const data = req.body;
    const resPost = await model.create(data);
    res.send({
      data: resPost,
    });
  } catch (err) {
    if (err) {
      res.send({ error: "Error: " }, 422);
    }
  }
};
