import { fadeAnimation } from './shared/animations/fade.animation';
import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements AfterViewInit {
  isLoading;
  constructor(private router: Router) {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.isLoading = false;
        }
      });
  }
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'home';
  }
}

