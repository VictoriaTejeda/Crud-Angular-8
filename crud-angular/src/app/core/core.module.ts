import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudService } from './models/crud/crud.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CrudService
  ]
})
export class CoreModule { }