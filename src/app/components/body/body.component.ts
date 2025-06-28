import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AdditionnalsComponent } from './additionnals/additionnals.component';
import { ReadyComponent } from './ready/ready.component';

@Component({
  selector: 'app-body',
  imports: [
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    AdditionnalsComponent,
    ReadyComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
