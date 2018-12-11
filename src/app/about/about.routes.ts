import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { VisionComponent } from './vision/vision.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { IsackWanjohiComponent } from './leadership/isack-wanjohi/isack-wanjohi.component';

export const routes: Routes = [
  { path: 'who-we-are', component: WhoWeAreComponent, data: { title: 'Who We Are' } },
  { path: 'vision', component: VisionComponent, data: { title: 'Vision' } },
  {
    path: 'leadership', children: [
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
export class AboutRoutingModule { }
