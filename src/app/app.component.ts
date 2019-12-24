import { Component, Renderer2, AfterViewInit } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'myStoreApp';
  // Sets initial value to true to show loading spinner on first load
  loading = true;

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;

          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngAfterViewInit() {
    const loader = this.renderer.selectRootElement('#loader');
    loader.style.display = 'none';
  }
}
