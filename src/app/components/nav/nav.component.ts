import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren, inject } from '@angular/core';
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
export class NavComponent implements OnInit, OnChanges {
  @Input({ required: true }) items: NavItem[] = [];
  @Input({ required: true }) fragment = '';
  public previousFragment = '';
  public currentFragment = '';
  @ViewChildren('navItems') navItems: QueryList<ElementRef<HTMLAnchorElement>> | undefined;

  public themeService = inject(ThemeService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fragment']) {
      this.previousFragment = changes['fragment'].previousValue;
      this.currentFragment = changes['fragment'].currentValue;
      this.animateNavItemIndicator();
    }
  }

  private animateNavItemIndicator() {
    if (this.navItems === undefined) return;

    const animationDuration = 250;

    for (const navItem of this.navItems) {
      const navItemIndicator = navItem.nativeElement.getElementsByClassName('nav-item-indicator')[0] as HTMLDivElement;

      navItemIndicator.style.visibility = 'visible';

      if (navItem.nativeElement.hash.substring(1) === this.previousFragment) {
        setTimeout(() => navItemIndicator.style.visibility = 'hidden', animationDuration);

        navItemIndicator.animate([
          { transform: 'scaleX(1)', opacity: 1 },
          { transform: 'scaleX(0)', opacity: 0 }
        ], { duration: animationDuration, fill: 'forwards' });

      } else if (navItem.nativeElement.hash.substring(1) === this.currentFragment) {

        navItemIndicator.animate([
          { transform: 'scaleX(0)', opacity: 0 },
          { transform: 'scaleX(1)', opacity: 1 }
        ], { duration: animationDuration, fill: 'forwards' });

      } else {
        navItemIndicator.style.visibility = 'hidden';
      }
    }
  }
}
