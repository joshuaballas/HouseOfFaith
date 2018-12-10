import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitComponent } from './visit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: VisitComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VisitRoutingModule { }
