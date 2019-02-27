// los servicios permiten definir metodos que seran usados en cualquier parte de la app
// we can use all the REST API methods defined on the backend
import { Injectable } from '@angular/core';
// http allows us to connect our application with the server
import { HttpClient } from '@angular/common/http';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})

export class PreguntaService {

  readonly URL_API = 'http://localhost:3000/api/preguntas';
  preguntas: Array<Pregunta>;
  selectedPregunta: Pregunta;

  constructor(private http: HttpClient) {
    this.selectedPregunta = new Pregunta();
  }

  getPreguntas(){
    return this.http.get(this.URL_API);
  }

  postPregunta(Pregunta: Pregunta){
    return this.http.post(this.URL_API, Pregunta);
  }

  putPregunta(Pregunta: Pregunta){
    return this.http.put(this.URL_API + `/${Pregunta._id}`, Pregunta);
  }

  deletePregunta(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
