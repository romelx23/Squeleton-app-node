const Rol = require("../models/rol");
const Usuario = require("../user/user.model");


const esRoleValido = async (rol = "") => {
  const existeRol = await Rol.findOne({ rol });

  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado`);
  }
};

const emailExiste=async(correo="")=>{
    const existeEmail=await Usuario.findOne({ correo });
    if (existeEmail) {
      throw new Error(`El correo ${correo} ya está registrado`);
    }
};

const existeUsuarioPorId=async(id)=>{
    // Verificar si el correo existe
    const existeUsuario=await Usuario.findById(id);
    if (!existeUsuario) {
      throw new Error(`El id: ${id} no esta registrado`);
    }
};

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
};
