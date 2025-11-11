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
    const filters = this.urlService.parseUrl();
    this.filter$.next(this.cleanFilters({ id: '', ...filters }))
  }

  setFilters(filters: Partial<DashboardFilters>) {
    const currentFilters = this.getFilters();
    const newFilters = filters.hasOwnProperty('status')
      ? this.cleanFilters({ id: '', ...filters })
      : this.cleanFilters({ ...currentFilters, ...filters });
    this.filter$.next(newFilters);
    this.urlService.updateUrlByQueryParams(newFilters);
  }

  cleanFilters(filters: Partial<DashboardFilters>): DashboardFilters {
    if (filters.status + '' === 'undefined') filters.status = 0;
    return filters as DashboardFilters;
  }

  getFilters() {
    return this.filter$.value;
  }
}
