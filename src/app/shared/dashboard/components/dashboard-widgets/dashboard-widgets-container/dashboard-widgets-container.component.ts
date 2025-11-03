import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardWidgetsLastUpdateComponent } from '../dashboard-widgets-last-update/dashboard-widgets-last-update.component';
import { DashboardWidgetsTotalTasksComponent } from '../dashboard-widgets-total-tasks/dashboard-widgets-total-tasks.component';
import { DashboardWidgetsStatusComponent } from '../dashboard-widgets-status/dashboard-widgets-status.component';
import { DashboardWidgetsDateRangeComponent } from '../dashboard-widgets-date-range/dashboard-widgets-date-range.component';
import { DashboardWidgetsTasksGraphComponent } from '../dashboard-widgets-tasks-graph/dashboard-widgets-tasks-graph.component';
import { DashboardWidgetsStatusesGraphComponent } from '../dashboard-widgets-statuses-graph/dashboard-widgets-statuses-graph.component';
import { ProjectStatistics } from '../../../../../core/interfaces/project-statistics';
import { DashboardFilters } from '../../../../../core/interfaces/dashboard-filters';
import { ProjectStatuses } from '../../../../../core/interfaces/project-statuses';

@Component({
  selector: 'app-dashboard-widgets-container',
  standalone: true,
  imports: [
    DashboardWidgetsLastUpdateComponent,
    DashboardWidgetsTotalTasksComponent,
    DashboardWidgetsStatusComponent,
    DashboardWidgetsDateRangeComponent,
    DashboardWidgetsTasksGraphComponent,
    DashboardWidgetsStatusesGraphComponent
  ],
  templateUrl: './dashboard-widgets-container.component.html',
  styleUrl: './dashboard-widgets-container.component.scss'
})
export class DashboardWidgetsContainerComponent implements OnChanges {
  @Input() projects: ProjectStatistics[] | null = [];
  @Input() selectedFilters: DashboardFilters | null = { } as DashboardFilters;
  filteredProjects: ProjectStatistics[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedFilters'] || changes['projects']) {
      if (this.projects && this.selectedFilters) {
        this.filteredProjects = this.projects.filter(project =>
          !this.selectedFilters!.status && !this.selectedFilters!.id
          || !this.selectedFilters!.id && this.selectedFilters!.status === project.status
          || this.selectedFilters!.id && this.selectedFilters!.id === project.id
        )
      } else {
        this.filteredProjects = this.projects ? this.projects : [ ];
      }
    }
  }

  allStatuses = ProjectStatuses;
}
