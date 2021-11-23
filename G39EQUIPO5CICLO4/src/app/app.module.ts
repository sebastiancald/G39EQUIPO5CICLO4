import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { TablaMostrarComponent } from './componentes/tabla-mostrar/tabla-mostrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Navbar1Component,
    LoginComponent,
    InicioComponent,
    ProductoComponent,
    TablasComponent,
    MenuComponent,
    SidebarComponent,
    TablaMostrarComponent,
    NavbarComponent,
    ClientesComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
