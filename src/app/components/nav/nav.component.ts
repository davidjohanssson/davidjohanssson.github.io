import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { NavItem } from './nav-item.interface';

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
  @Input({ required: true }) items: NavItem[] = []

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  public themeService = inject(ThemeService);

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment === null) return;
        if (this.items.map(navItem => navItem.fragment).includes(fragment) === false) return;
        const element = document.querySelector('#' + fragment);
        if (element === null) return;
        element.scrollIntoView({ behavior: 'smooth' });
      });
  }
}
