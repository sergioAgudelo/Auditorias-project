// Configuracion BD
// Mongoose es el encargado de conectarse a la base de datos y modelar datos, le dice a express 
// que se conecte a mongoDB
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;