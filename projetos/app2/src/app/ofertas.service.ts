import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

//import 'rxjs/add/operator/toPromise' 

@Injectable()
export class OfertaService {

    constructor (private http: HttpClient){ }

    
    public getOfertas(): Promise<any> {
        //efetua requisicao http e retorna promise Oferta[]
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then(
            response => {
                return response
            })
    }
    

    /*public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            let deu_certo = true;
            
            if(deu_certo) {
                setTimeout(() => resolve( this.ofertas ), 3000)
                //resolve( this.ofertas )
            } else{
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado' })
            }
        })
        .then (( ofertas:Oferta[]) => {
            //fazer alguma tratavia
            console.log('1 then')
            return ofertas
        })
        .then (( ofertas:Oferta[]) => {
            //fazer alguma outra tratavia
            console.log('2 then')
            return new Promise((resolve2, reject2) =>{
                setTimeout(() => { resolve2( ofertas ) },3000)
            })
        })
        .then(( ofertas: Oferta[] ) => {
            console.log('terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida')
            return ofertas
        })
    }*/
}