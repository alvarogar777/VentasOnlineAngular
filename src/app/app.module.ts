import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import {  APP_ROUTING } from './app.routes';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ModulosComponent,
    CategoriasComponent,
    LoginComponent,
    //FormsModule
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
    //AppRoutingModule
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
