import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina01RoutingModule } from './pagina01-routing.module';
import { Visao01Component }      from './visao01/visao01.component';


@NgModule({
  declarations: [Visao01Component
  ],
  imports: [
    CommonModule,
    Pagina01RoutingModule
  ]
})
export class Pagina01Module { }
