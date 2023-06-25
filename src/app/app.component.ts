import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { NavComponent } from "./components/nav/nav.component";

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

  private router = inject(Router);
  private location = inject(Location);

  ngAfterViewInit() {
    this.initIntersectionObserver();
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
}
