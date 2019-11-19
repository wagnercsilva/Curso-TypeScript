import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { CotacaoService } from './cotacao.service'

import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ CotacaoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
