import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { NgForOf, NgIf } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

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
    NgIf,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatIcon,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  navLinks = [
    {
      link: '',
      label: 'Home',
    },
    {
      link: '/scoreboards',
      label: 'Scores',
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
  public mobileView = true;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 400px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobileView = false;
        } else {
          this.mobileView = true;
        }
      });
  }
}
