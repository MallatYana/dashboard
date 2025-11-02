import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFilters } from '../../../../core/interfaces/dashboard-filters';
import { DashboardProjectsListFiltersComponent } from '../dashboard-projects-list-filters/dashboard-projects-list-filters.component';

@Component({
  selector: 'app-dashboard-projects-list-header',
  standalone: true,
  imports: [ CommonModule, DashboardProjectsListFiltersComponent ],
  templateUrl: './dashboard-projects-list-header.component.html',
  styleUrl: './dashboard-projects-list-header.component.scss'
})
export class DashboardProjectsListHeaderComponent {
  @Input() isSelected: boolean = false;

  onFilterChange(filters: DashboardFilters) {

  }
}
