import {RouterModule, ROUTES, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';


const APP_ROUTES: Routes = [
    { path:'home',component:HomeComponent},
    { path:'modulos',component:ModulosComponent},
    { path:'categorias',component:CategoriasComponent},
    { path:'login',component:LoginComponent},
    { path:'**' , pathMatch:'full',redirectTo:'home'}    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true} );