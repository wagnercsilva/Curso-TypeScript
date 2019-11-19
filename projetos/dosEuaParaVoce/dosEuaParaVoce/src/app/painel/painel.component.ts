import { Component, OnInit, Input } from '@angular/core';
import { CotacaoService } from '../cotacao.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public vlProduto: string = ''
  public vlTaxa: string = ''
  public vlFrete: string = ''
  public vlFinal: number = 0
  public vlDolar: number

  cotacao: Array<any>;

  constructor(private cotacaoService: CotacaoService) {
   }

  ngOnInit() {
    this.consultarDolar();
  }

  consultarDolar(){
    this.cotacaoService.listar().subscribe(dados => this.cotacao = dados);
  }

  calcular(){
    this.vlDolar = this.cotacao['USD']['bid'];

    this.vlFinal = ( (Number(this.vlProduto) + Number(this.vlProduto) * 0.06)
    + Number(this.vlTaxa)
    + Number(this.vlFrete) )  * Number(JSON.stringify(this.vlDolar).substring(1,5).replace(',', '.'));
 
    this.vlFinal = parseFloat(this.vlFinal.toFixed(2));
  }

  public obterValorProduto(vlProduto: Event, vlTaxa: Event): void{
    this.vlProduto = (<HTMLInputElement>vlProduto.target).value
    this.calcular()
  }

  public obterValorTaxa(vlTaxa: Event): void{
    this.vlTaxa = (<HTMLInputElement>vlTaxa.target).value
    this.calcular()
  }

  public obterValorFrete(vlFrete: Event): void{
    this.vlFrete = (<HTMLInputElement>vlFrete.target).value
    this.calcular()
  }

}
