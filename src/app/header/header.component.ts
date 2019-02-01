import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../shared/services/navigation.service';
import { YouTubeService } from '../shared/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  public isLive: boolean;

  constructor(
    private router: Router,
    public _nav: NavigationService,
    private _yts: YouTubeService
  ) {
    this.router.events.subscribe(() => {
      if (!this.isCollapsed) { this.isCollapsed = true; }
    });

    this.youtubeLiveCheck();
    setInterval(this.youtubeLiveCheck.bind(this), 300 * 1000);
  }

  public youtubeLiveCheck() {
    this._yts.youtubeLiveCheck().then(data => {
      if (data && data['items'].length) {
        // console.log(data['items']);
        this._yts.isLive = true;
        this.isLive = true;
      } else {
        this._yts.isLive = false;
        this.isLive = false;
      }
    });
  }

}
