import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadershipComponent } from './leadership.component';
import { IsackWanjohiComponent } from './isack-wanjohi/isack-wanjohi.component';

export const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: LeadershipComponent, data: { title: 'Leadership' } },
      { path: 'isack-wanjohi', component: IsackWanjohiComponent, data: { title: 'Isack Wanjohi' } }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeadershipRoutingModule { }
