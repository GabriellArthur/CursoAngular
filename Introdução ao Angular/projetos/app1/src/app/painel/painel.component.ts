import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit { //Event Binding
  public frases: Array<Frase> = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = ""

  constructor() {
    console.log(this.frases)
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value//Pegando o value de uma propriedade html
    console.log(this.resposta)
  }

  public verificarResposta():void{
    console.log('Verificar Repostas: ',this.resposta)
  }
}
