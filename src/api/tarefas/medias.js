const restful = require('node-restful')
const mongoose = restful.mongoose

const mediasSchema = new mongoose.Schema({
    
    Categoria: { type: String, required: true },
    Cod: { type: String, required: true },
    PM: { type: String, required: true },
    P_Total: { type: String, required: true },
    Qtd: { type: String, required: true },   
})

module.exports = restful.model('Medias', mediasSchema)