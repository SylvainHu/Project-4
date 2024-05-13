import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '', title: 'App Home Page', component: HomeComponent,
  },
  {
    path: 'ex1', title: 'Ex1 Page', component: Ex1Component,
  },
  {
    path: 'ex2', title: 'Ex2 Page', component: Ex2Component,
  },
  {
    path: 'details/:id', title: 'Ex3 Details', component: DetailsComponent,
  },
];
