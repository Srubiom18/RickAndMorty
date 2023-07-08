import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BuscadorComponentComponent } from './buscador-component/buscador-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltroComponentComponent } from './filtro-component/filtro-component.component';
import { RandomComponentComponent } from './random-component/random-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BuscadorComponentComponent,
    FiltroComponentComponent,
    RandomComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
