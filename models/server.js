const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios';

        // Midelwares
        this.middleware();
        // rutas de mi aplicacion
        this.routes();
    }

    middleware(){
        // Directorio publico
        this.app.use(express.static('public'));
        // Lestura y parseo del codigo
        this.app.use(express.json());
        // CORS
        this.app.use(cors());
    }

    routes(){

        this.app.use(this.usuariosPath,require('../routes/user.routes'));
    
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo el puerto ',this.port)
        })
    }

}

module.exports=Server;