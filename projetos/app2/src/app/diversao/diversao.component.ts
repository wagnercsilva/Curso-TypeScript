import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertaService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertaService) {  }

  ngOnInit() {
      //this.ofertas = this.ofertasService.getOfertasPorCategoria();
      //console.log(this.ofertas)
      
      this.ofertasService.getOfertasPorCategoria("diversao")
        .then(( ofertas: Oferta[] ) => {
          this.ofertas = ofertas
        })
        .catch(( param:any ) => {
          console.log(param)
        })
  }

}
