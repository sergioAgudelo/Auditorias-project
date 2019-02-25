const mongoose = require('mongoose');
const { Schema } = mongoose;

const preguntaSchema = new Schema({
    numero: { type: String, required: true},
    pregunta: { type: String, required: true },
    repsuesta: { type: String, required: true }    
});

module.exports = mongoose.model('Pregunta', preguntaSchema);