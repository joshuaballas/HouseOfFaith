import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

const APP_TITLE = 'House of Faith';
const SEPARATOR = ' | ';

@Injectable()
export class TitleService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  static ucFirst(string) {
    if (!string) { return string; }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).pipe(map(() => {
      let route = this.activatedRoute;
      while (route.firstChild) { route = route.firstChild; }
      return route;
    })).pipe(
      filter((route) => route.outlet === 'primary')
    ).pipe(
      mergeMap((route) => route.data)
    ).pipe(map((data) => {
      if (data.title) {
        return data.title;
      } else {
        return this.router.url.split('/').reduce((acc, frag) => {
          if (acc && frag) { acc += SEPARATOR; }
          return acc + TitleService.ucFirst(frag);
        });
      }
    })).subscribe((pathString) => this.titleService.setTitle(`${APP_TITLE} ${SEPARATOR} ${pathString}`));
  }
}
