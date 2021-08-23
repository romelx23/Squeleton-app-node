// {
//     nombre:'romel',
//     correo:'dasda@SpeechGrammarList.com',
//     password:'32423432',
//     img:'adasdas',
//     rol:'12321',
//     estado:false,
//     google:false,
// }
const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

// Modificamos el json que nos devuelve mongoose
UsuarioSchema.methods.toJSON=function(){
  const { __v, password,...data }=this.toObject(); //eslint-disable-line
  let usuario={id:data._id,...data};
  delete usuario._id;
  return usuario;
};

const Usuario= model("Usuario",UsuarioSchema);
module.exports =Usuario;
