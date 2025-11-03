import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardFilters } from '../../../../core/interfaces/dashboard-filters';
import { DashboardProjectsListFilterStatusComponent } from '../dashboard-projects-list-filter-status/dashboard-projects-list-filter-status.component';
import { FiltersService } from '../../../../core/services/filters.service';

@Component({
  selector: 'app-dashboard-projects-list-filters',
  standalone: true,
  imports: [ DashboardProjectsListFilterStatusComponent ],
  templateUrl: './dashboard-projects-list-filters.component.html',
  styleUrl: './dashboard-projects-list-filters.component.scss'
})
export class DashboardProjectsListFiltersComponent {
  @Input() selectedFilters: DashboardFilters = { } as DashboardFilters;

  constructor(
    private filterService: FiltersService
  ) { }

  onFilterChange(filters: Partial<DashboardFilters>) {
    this.selectedFilters = { ...this.selectedFilters, ...filters };
    this.filterService.setFilters(this.selectedFilters);
  }
}
