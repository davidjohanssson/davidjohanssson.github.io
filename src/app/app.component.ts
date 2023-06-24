import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { filter } from 'rxjs';
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
export class AppComponent implements OnInit {
	private router = inject(Router);
	private activatedRoute = inject(ActivatedRoute);

	ngOnInit(): void {
		this.router.events
		.pipe(filter(event => event instanceof NavigationEnd))
		.subscribe(() => {
			const rt = this.getChild(this.activatedRoute);

			// rt.fragment.subscribe(fragVal => {
			// 	if (fragVal) {
			// 		document.querySelector('#' + fragVal)?.scrollIntoView({ behavior: 'smooth' });
			// 	}
			// });
		});
	}

	private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
		if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
	}
}
