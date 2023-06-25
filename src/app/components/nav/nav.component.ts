import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  name: string;
  fragment: string;
  icon: string;
  isSelected?: boolean;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navItems: NavItem[] = [
    { name: 'Home', fragment: 'home', icon: 'home' },
    { name: 'Projects', fragment: 'projects', icon: 'work' },
    { name: 'Skills', fragment: 'skills', icon: 'bolt' },
    { name: 'Contact', fragment: 'contact', icon: 'contact_page' },
  ];

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment === null) return;
        if (this.navItems.map(navItem => navItem.fragment).includes(fragment) === false) return;
        const element = document.querySelector('#' + fragment);
        if (element === null) return;
        element.scrollIntoView({ behavior: 'smooth' });
      });
  }
}
