import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaTransferencia } from './nova-transferencia.component.html/nova-transferencia.component.html.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferencia.Component.HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
