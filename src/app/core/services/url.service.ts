import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serializer: UrlSerializer,
    private location: Location,
  ) { }

  updateUlrByQueryParams(object: Object) {
    const queryString = new URLSearchParams(object as any).toString();
    const currentPath = this.location.path().split('?')[0];
    this.location.go(`${currentPath}?${queryString}`);
  }

  parseUrl(): Params {
    const { queryParams } = this.activatedRoute.snapshot;
    return queryParams;
  }

  getLastSegment(): string {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/').filter(Boolean);
    return segments[segments.length - 1] || '';
  }

  changeLastSegment(newSegment: string) {
    const currentUrl = this.router.url;
    const lastSegment = this.getLastSegment();
    const newRoute = currentUrl.replace(lastSegment, newSegment);
    this.location.replaceState(newRoute);
  }

  addSegment(newSegment: string) {
    const currentUrl = this.router.url;
    const newRoute = newSegment ? `${currentUrl}/${newSegment}` : `${currentUrl}`;
    this.location.replaceState(newRoute);
  }
}
