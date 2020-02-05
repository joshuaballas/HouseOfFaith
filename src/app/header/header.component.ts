import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;

  constructor(
    private router: Router,
    public _nav: NavigationService
  ) {
    this.router.events.subscribe(() => {
      if (!this.isCollapsed) { this.isCollapsed = true; }
    });
  }

}
