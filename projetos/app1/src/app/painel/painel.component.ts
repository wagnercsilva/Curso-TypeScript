import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase [] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase : Frase

  public progresso: number = 0

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{
    //trocar pergunta da rodada
    if(this.resposta.toUpperCase() == this.rodadaFrase.frasePtBr.toUpperCase()){
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 4){
        alert('Parabéns, Voce Venceu')
      }

      this.atualizaRodada()          
      
    }else{
      this.tentativas--

      if(this.tentativas === -1){
        alert('Game Over')
      }
    }
   
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

  public tentativas: number = 3

}
