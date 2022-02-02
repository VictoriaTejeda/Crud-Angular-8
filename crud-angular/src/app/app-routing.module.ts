import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children : [

      { 
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path:'home',
        loadChildren: ()=> import('./home/HomeModule').then(m=>m.HomeModule)
      },
      {
        path:'products',
        component:ProductsComponent 
      },
    
      {
        path:'products/:id',
        component:ProductDetailComponent 
      },
      {
        path:'user',
        component:UsersComponent 
      },
    
      {
        path:'login',
        component:LoginComponent 
      }
    ]
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
