import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Visao01Component } from './visao01/visao01.component';

const routes: Routes = [
  { path: '', redirectTo: 'visao01', pathMatch: 'full' },
  { path: 'visao01', component: Visao01Component },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pagina01RoutingModule { }
