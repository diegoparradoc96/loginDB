import mongoose from "mongoose";

const DB_URI = `mongodb://0.0.0.0:27017/my_app_node`;

module.exports = async () => {
  try {
    await mongoose.connect(DB_URI, {
      keepAlive: true,
      //useNewUrlParser: true, // Molesta al importar mongoose de esta forma
      //useUnifiedTopology: true, // Esta tambien
    });
    console.log("Conexion correcta!");
  } catch (err) {
    console.error("DB: ERROR: ", err);
  }
};
