import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabNavPanel,
    MatTabNav,
    MatTabLink,
    RouterLinkActive,
    RouterLink,
    NgForOf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navLinks = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/scoreboards',
      label: 'Scoreboards',
    },
    {
      link: '/rosters',
      label: 'Rosters',
    },
    {
      link: '/FAQ',
      label: 'FAQ',
    },
  ];
}
