import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DashboardFilters } from '../interfaces/dashboard-filters';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  constructor(
    private urlService: UrlService
  ) { }

  private filter$ = new BehaviorSubject<DashboardFilters>({ } as DashboardFilters);
  filters = this.filter$.asObservable();

  setUrlFilters() {
    const filters1 = this.urlService.parseUrl();
    this.filter$.next(filters1 as DashboardFilters)
  }

  setFilters(filters: Partial<DashboardFilters>) {
    const currentFilters = this.getFilters();
    const newFilters = { ...currentFilters, ...filters };
    this.filter$.next(newFilters);
    this.urlService.updateUlrByQueryParams(newFilters);
  }

  getFilters() {
    return this.filter$.value;
  }
}
