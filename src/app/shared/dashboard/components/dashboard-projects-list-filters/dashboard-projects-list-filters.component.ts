import {Component, OnInit } from '@angular/core';
import { DashboardFilters } from '../../../../core/interfaces/dashboard-filters';
import { DashboardProjectsListFilterStatusComponent } from '../dashboard-projects-list-filter-status/dashboard-projects-list-filter-status.component';
import { FiltersService } from '../../../../core/services/filters.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-projects-list-filters',
  standalone: true,
  imports: [ DashboardProjectsListFilterStatusComponent, AsyncPipe ],
  templateUrl: './dashboard-projects-list-filters.component.html',
  styleUrl: './dashboard-projects-list-filters.component.scss'
})
export class DashboardProjectsListFiltersComponent implements OnInit {
  selectedFilters$: Observable<DashboardFilters> = of({ } as DashboardFilters);

  ngOnInit() {
    this.filterService.setUrlFilters()
    this.selectedFilters$ = this.filterService.filters;
  }

  constructor(
    private filterService: FiltersService
  ) { }

  onFilterChange(filters: Partial<DashboardFilters>) {
    this.filterService.setFilters(filters);
  }
}
