import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
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
    path:'menu',
    component:MenuComponent
  },
  {
    path:'tablas',
    component:TablasComponent
  }
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
