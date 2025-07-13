import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
