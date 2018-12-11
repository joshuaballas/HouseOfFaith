import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { YouTubeService } from '../shared/services/youtube.service';

@Injectable()
export class CanLoadLiveRouteGuard implements CanActivate {
  constructor(private _yts: YouTubeService) { }

  canActivate(): boolean {
    if (this._yts.isLive) {
      return true;
    } else {
      return false;
    }
  }
}
