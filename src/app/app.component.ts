import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { NavComponent } from "./components/nav/nav.component";
import { NavItem } from './components/nav/nav-item.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    NavComponent
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HomeComponent, { read: ElementRef }) home: ElementRef<HTMLElement> | undefined;
  @ViewChild(ProjectsComponent, { read: ElementRef }) projects: ElementRef<HTMLElement> | undefined;
  @ViewChild(SkillsComponent, { read: ElementRef }) skills: ElementRef<HTMLElement> | undefined;
  @ViewChild(ContactComponent, { read: ElementRef }) contact: ElementRef<HTMLElement> | undefined;

  public navItems: NavItem[] = [
    { name: 'Home', fragment: 'home', icon: 'home' },
    { name: 'Projects', fragment: 'projects', icon: 'work' },
    { name: 'Skills', fragment: 'skills', icon: 'bolt' },
    { name: 'Contact', fragment: 'contact', icon: 'contact_page' },
  ];

  private location = inject(Location);

  ngAfterViewInit() {
    this.initIntersectionObserver();
    document.addEventListener('scroll', this.handleScroll.bind(this));
  }

  private initIntersectionObserver() {
    const options = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.location.replaceState(`#${entry.target.id}`);
        }
      }
    }, options);

    observer.observe(this.home!.nativeElement);
    observer.observe(this.projects!.nativeElement);
    observer.observe(this.skills!.nativeElement);
    observer.observe(this.contact!.nativeElement);
  }

  private handleScroll() {
    const element = document.scrollingElement as HTMLElement;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    console.log(scrollPercentage);
  }
}
