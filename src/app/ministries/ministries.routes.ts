import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistriesComponent } from './ministries.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MinistriesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MinistriesRoutingModule { }
