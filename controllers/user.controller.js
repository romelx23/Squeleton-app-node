const { response, request } = require("express")

const usuariosGet=(req=request,res=response)=>{
    const {q,nombre='No name',apikey,page=1,limit=10}=req.query;
    res.json({
        "msg":"get Api -controlador",
        q,
        nombre,
        apikey,
        page,
        limit,
    })
}
const usuariosPost=(req,res=response)=>{
    // leer y parsear del body que me envien
    const {nombre,edad}=req.body;
    res.json({
        "msg":"api post",
        nombre,
        edad,
    })
}
const usuariosPut=(req=request,res=response)=>{
    // capturando query params
    const {id}=req.params;

    res.status(500).json({
        "ok":"true",
        "msg":"api put",
        id
    })
}
const usuariosPatch=(req,res=response)=>{
    res.json({
        "msg":"api patch"
    })
}
const usuariosDelete=(req,res=response)=>{
    res.json({
        "msg":"api delete"
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}