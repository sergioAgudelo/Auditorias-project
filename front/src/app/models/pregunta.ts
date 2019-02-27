export class Pregunta {

    constructor(_id='', pregunta='', respuestas=[]){
        this._id = _id;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
    }

    _id: string;
    pregunta: string;
    respuestas: Array<string>;
}
