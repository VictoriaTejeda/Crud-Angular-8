import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from './home-routing.module';



@NgModule({
    declarations: [
        ProductComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
    ]
})


export class HomeModule {
}
