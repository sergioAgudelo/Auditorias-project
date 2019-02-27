const PreguntaModel = require('../models/pregunta');

const preguntaCtrl = {};

preguntaCtrl.getPreguntas = async (req, res, next) => {
    const preguntas = await PreguntaModel.find();
    res.json(preguntas);
};

preguntaCtrl.createPregunta = async (req, res, next) => {
    const pregunta = new PreguntaModel(req.body);
    await pregunta.save();
    res.json('received');

    // const pregunta = new PreguntaModel({
    //    name: req.body.name,
    //    position: req.body.position,
    //    office: req.body.office,
    //    salary: req.body.salary
    // });
    // await pregunta.save();
    // res.json({status: 'Question created'});
};

preguntaCtrl.getPregunta = async (req, res, next) => {
    const { id } = req.params;
    const pregunta = await PreguntaModel.findById(id);
    res.json(pregunta);
};

preguntaCtrl.editPregunta = async (req, res, next) => {
    const { id } = req.params;
    const pregunta = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await PreguntaModel.findByIdAndUpdate(id, {$set: pregunta}, {new: true});
    res.json({status: 'Pregunta Updated'});
};


preguntaCtrl.asignarRespuesta = async (req, res, next) => {
    const { id } = req.params;
    const pregunta = {
        respuestas: req.body.respuesta      
    };
    await PreguntaModel.findByIdAndUpdate(id, { $push: pregunta }, { new: true });
    res.json({ status: 'Pregunta Updated' });
};


preguntaCtrl.deletePregunta = async (req, res, next) => {
    await PreguntaModel.findByIdAndRemove(req.params.id);
    res.json({status: 'Pregunta Deleted'});
};

module.exports = preguntaCtrl;