// nodemon registra cambios en js y vuelve a lanzar el servidor

// Express.js es un framework para Node.js que sirve para ayudarnos a crear aplicaciones web en menos
// tiempo ya que nos proporciona funcionalidades como el  enrutamiento, opciones para gestionar 
// sesiones y cookies, y un largo etc…
const express = require('express');
// morgan ayuda a ver por consola lo que el usuario quiere
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

// Midlewares
// cuando pidamos o demos datos al servidor el servidor debe entenderlos, aqui se realiza la conversion
// para que el servidor entienda estos datos
app.use(morgan('dev'));
// preparar el servidor para interpretar json (las repsuestas de angular)
app.use(express.json());

// Routes
app.use('/api/preguntas', require('./routes/preguntas.routes'));

// Starting the server
app.listen(app.get('port'),  () => {
    console.log('Serve on port ' + app.get('port'));
});