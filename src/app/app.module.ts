import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PerfiluserComponent } from './perfiluser/perfiluser.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const rutas:Routes = [
  {path:'',component:InicioComponent,pathMatch: 'full'},
  {path:'perfil', component:PerfiluserComponent},
  {path:'productos', component:ProductosComponent},
  {path:'NotFound404',component:Pagina404Component},
  {path: '**', redirectTo: 'NotFound404', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    ProductosComponent,
    PerfiluserComponent,
    FooterComponent,
    InicioComponent,
    Pagina404Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
