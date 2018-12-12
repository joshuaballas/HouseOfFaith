import { Routes } from '@angular/router';

import { CanLoadLiveRouteGuard } from './header/header.guard';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
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
    canActivate: [CanLoadLiveRouteGuard],
    loadChildren: './live/live.module#LiveModule'
  },
  { path: '**', component: HomeComponent, data: { title: 'Home' } }
];
