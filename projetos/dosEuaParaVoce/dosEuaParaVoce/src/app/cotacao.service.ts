import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

  export class CotacaoService {

  cotacaoUrl = 'https://economia.awesomeapi.com.br/all/USD-BRL';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.cotacaoUrl}`);
  }
}
