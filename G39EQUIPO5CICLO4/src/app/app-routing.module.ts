import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { VentasComponent } from './componentes/ventas/ventas.component';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent

  },
  
  {
    path:'login',
    component:LoginComponent
    
  },
    
  {
    path:'producto',
    component:ProductoComponent
  },
  {
    path:'login/menu',
    component:MenuComponent
  },
  
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'ventas',
    component:VentasComponent
  },
  {
    path:'reportes',
    component:ReportesComponent
  }
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
