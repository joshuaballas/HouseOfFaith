import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { VisionComponent } from './vision/vision.component';
import { LeadershipComponent } from './leadership/leadership.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', children: [
      { path: 'who-we-are', component: WhoWeAreComponent, data: { title: 'Who We Are' } },
      { path: 'vision', component: VisionComponent, data: { title: 'Vision' } },
      { path: 'leadership', component: LeadershipComponent, data: { title: 'Leadership' } }
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
