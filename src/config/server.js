const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/connection");
const morgan=require("morgan");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    // Morgan
    this.app.use(morgan("dev"));
    // Conectar a base de datos
    this.conectarDB();
    // Midelwares
    this.middleware();
    // rutas de mi aplicacion
    this.routes();
    // Directorio publico
    this.app.use(express.static("public"));
  }

  async conectarDB(){
    await dbConnection();
  }

  middleware() {
    // Directorio publico
    this.app.use(express.static("public"));
    // Lestura y parseo del codigo
    this.app.use(express.json());
    // CORS
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.usuariosPath, require("../../src/routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo el puerto ", this.port);
    });
  }
}

module.exports = Server;
