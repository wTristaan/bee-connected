import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-body',
  imports: [LandingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
