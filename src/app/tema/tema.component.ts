import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }
  
  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=> {
      this.tema = resp
      this.alertas.showAlertSuccess('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
 }
}
