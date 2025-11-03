import { Component, Input } from '@angular/core';
import { DashboardProjectsListItemComponent } from '../dashboard-projects-list-item/dashboard-projects-list-item.component';
import { DashboardProjectsListHeaderComponent } from '../dashboard-projects-list-header/dashboard-projects-list-header.component';
import { ProjectStatistics } from '../../../../../core/interfaces/project-statistics';
import { FiltersService } from '../../../../../core/services/filters.service';
import { DashboardFilters } from '../../../../../core/interfaces/dashboard-filters';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-projects-list',
  standalone: true,
  imports: [
    DashboardProjectsListItemComponent,
    DashboardProjectsListHeaderComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard-projects-list.component.html',
  styleUrl: './dashboard-projects-list.component.scss'
})
export class DashboardProjectsListComponent {
  @Input() projects: ProjectStatistics[] | null = [];
  @Input() selectedFilters: DashboardFilters | null = { } as DashboardFilters;

  setActiveTab(id: string) {
    this.filterService.setFilters({ id: id })
  }

  constructor(
    private filterService: FiltersService
  ) { }
}
