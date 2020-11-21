var conexao = require('../config/conexao')

var usuarioSchema = conexao.Schema({
    nome:{type:String},
    email:{type:String},
    senha:{type:String},
    foto:{type:String}

})

module.exports  = conexao.model("usuario", usuarioSchema)
