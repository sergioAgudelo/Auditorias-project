const mongoose = require('mongoose');
const { Schema } = mongoose;

const preguntaSchema = new Schema({
    pregunta: { type: String, required: true },
    respuestas: [
        { type: String, required: false }
    ]
});

module.exports = mongoose.model('Pregunta', preguntaSchema);