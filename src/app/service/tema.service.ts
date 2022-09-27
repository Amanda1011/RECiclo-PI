import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://reciclopi.herokuapp.com/tema', this.token)
  }

  getByIdTema(id:number): Observable<Tema>{
    return this.http.get<Tema>(`https://reciclopi.herokuapp.com/tema/${id}`, this.token)
  }
  

  getByNomeTema(titulo: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://reciclopi.herokuapp.com/tema/titulo/${titulo}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://reciclopi.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://reciclopi.herokuapp.com/tema', tema, this.token)
  }
  deleteTema(id: number){
    return this.http.delete(`https://reciclopi.herokuapp.com/tema/${id}`, this.token)
  }


}
