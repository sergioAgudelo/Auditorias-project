const express = require('express');
const router = express.Router();

const preguntaCtrl = require('../controllers/pregunta.controller');

router.get('/', preguntaCtrl.getPreguntas);
router.post('/', preguntaCtrl.createPregunta);
router.get('/:id', preguntaCtrl.getPregunta);
router.put('/:id', preguntaCtrl.editPregunta);
router.delete('/:id', preguntaCtrl.deletePregunta);

module.exports = router;