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

  updateUlrByQueryParams(params: Object) {
    const newParams = this.createQueryParams(params);
    const queryParamsTree = this.router.createUrlTree([], {
      queryParams: { ...newParams }
    });
    const newUrl = this.serializer.serialize(queryParamsTree);
    this.location.replaceState(newUrl);
  }

  parseUrl(): Params {
    const { queryParams } = this.activatedRoute.snapshot;
    return queryParams;
  }

  createQueryParams<T extends object>(params: T) {
    const nweParams = Object.fromEntries(Object.entries(params)
      .filter(([key, value]) => !!value && value.toString() !== 'undefined'))
    return nweParams;
  }
}
