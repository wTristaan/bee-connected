import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-body',
  imports: [LandingComponent, AboutComponent, ServicesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
