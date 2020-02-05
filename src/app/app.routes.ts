import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about', data: { title: 'About' },
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'leadership',
    loadChildren: './leadership/leadership.module#LeadershipModule'
  },
  {
    path: 'ministries', data: { title: 'Ministries' },
    loadChildren: './ministries/ministries.module#MinistriesModule'
  },
  {
    path: 'visit-us', data: { title: 'Visit Us' },
    loadChildren: './visit/visit.module#VisitModule'
  },
  {
    path: 'contact', data: { title: 'Contact Us' },
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'live', data: { title: 'Live' },
    loadChildren: './live/live.module#LiveModule'
  },
  { path: '**', component: HomeComponent, data: { title: 'Home' } }
];
