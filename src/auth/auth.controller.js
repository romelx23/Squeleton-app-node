const { request, response } = require("express");

const Usuario = require("../user/user.model");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req = request, res = response) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el email Existe

    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario /Password no son correctos-correo",
      });
    }

    // Si el usuario esta activo

    if (!usuario.estado) {
      return res.status(400).json({
        msg: "Usuario /Password no son correctos-estado:false",
      });
    }

    // Verificar la contraseña

    const validarPassword=bcryptjs.compareSync(password,usuario.password);
    if (!validarPassword) {
        return res.status(400).json({
          msg: "Usuario /Password no son correctos-password",
        });
      }

    // Generar el JWT
    const token=await generarJWT(usuario.id);

    res.json({
      usuario,
      token
    });

  } catch (error) {
    res.status(500).json({
      msg: "Hable con el admnistrador",
    });
  }
};

module.exports = {
  login,
};
