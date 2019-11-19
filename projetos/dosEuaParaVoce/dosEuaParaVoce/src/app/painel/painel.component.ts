import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public vlProduto: string = ''
  public vlTaxa: string = ''
  public vlFrete: string = ''
  @Input() public vlFinal: number

  constructor() {
   }

  ngOnInit() {
  }

  calcular(){
    this.vlFinal = (Number(this.vlProduto) * 4  + Number(this.vlProduto) * 0.06)
    + Number(this.vlTaxa)
    + Number(this.vlFrete)
  }

  public obterValorProduto(vlProduto: Event): void{
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
