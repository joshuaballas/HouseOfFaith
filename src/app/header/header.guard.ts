import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { YouTubeService } from '../shared/services/youtube.service';

@Injectable()
export class CanLoadLiveRouteGuard implements CanActivate {
  constructor(
    private _yts: YouTubeService,
    private router: Router
    ) { }

  canActivate(): boolean {
    if (this._yts.isLive) {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
