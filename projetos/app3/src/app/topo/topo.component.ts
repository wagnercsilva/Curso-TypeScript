import { Component, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})

@Injectable({
    providedIn: 'root'
})

export class TopoComponent {
    public titulo: string = 'Aprendendo inglês'

    URL_API = 'https://economia.awesomeapi.com.br/all';

   constructor(private http: HttpClient) { }

    valor: any = [];

    ngOnInit() {
        this.http.get(this.URL_API)
        .subscribe(data => {this.valor = data; });
         }
}
