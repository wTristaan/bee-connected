import { Component, OnInit } from '@angular/core';
import { ReadyComponent } from '../body/ready/ready.component';

@Component({
  selector: 'app-about',
  imports: [ReadyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    burgerMenu!.classList.remove('open');
    menuOverlay!.classList.remove('active');
  }
}
