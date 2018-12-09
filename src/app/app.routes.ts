import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './about/who-we-are/who-we-are.component';
import { VisionComponent } from './about/vision/vision.component';
import { LeadershipComponent } from './about/leadership/leadership.component';
import { VisitComponent } from './visit/visit.component';
import { ContactComponent } from './contact/contact.component';
import { LiveComponent } from './live/live.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    children: [
      { path: 'who-we-are', component: WhoWeAreComponent, data: { title: 'Who We Are' } },
      { path: 'vision', component: VisionComponent, data: { title: 'Vision' } },
      { path: 'leadership', component: LeadershipComponent, data: { title: 'Leadership' } }
    ]
  },
  {
    path: 'visit-us',
    component: VisitComponent,
    data: { title: 'Visit Us' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us' }
  },
  {
    path: 'live',
    component: LiveComponent,
    data: { title: 'Live' }
  },
  { path: '**', component: HomeComponent }
];
