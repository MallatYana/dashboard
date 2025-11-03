import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardWidgetsLastUpdateComponent } from '../dashboard-widgets-last-update/dashboard-widgets-last-update.component';
import { DashboardWidgetsTotalTasksComponent } from '../dashboard-widgets-total-tasks/dashboard-widgets-total-tasks.component';
import { DashboardWidgetsStatusComponent } from '../dashboard-widgets-status/dashboard-widgets-status.component';
import { DashboardWidgetsDateRangeComponent } from '../dashboard-widgets-date-range/dashboard-widgets-date-range.component';
import { DashboardWidgetsTasksGraphComponent } from '../dashboard-widgets-tasks-graph/dashboard-widgets-tasks-graph.component';
import { DashboardWidgetsStatusesGraphComponent } from '../dashboard-widgets-statuses-graph/dashboard-widgets-statuses-graph.component';
import { DashboardWidgetsDatabaseConnectionComponent } from '../dashboard-widgets-database-connection/dashboard-widgets-database-connection.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
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
    DashboardWidgetsStatusesGraphComponent,
    DashboardWidgetsDatabaseConnectionComponent,
    HelpersNoDataComponent
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
          (!this.selectedFilters!.status || this.selectedFilters!.status.toString() === 'undefined') && !this.selectedFilters!.id
          || !this.selectedFilters!.id && this.selectedFilters!.status === project.status
          || this.selectedFilters!.id && this.selectedFilters!.id === project.id
        )
      } else {
        this.filteredProjects = this.projects ? this.projects : [ ];
      }
      if (this.filteredProjects.length) this.setData(this.filteredProjects);
    }
  }

  allStatuses = ProjectStatuses;

  lastUpdateTimeWidgetData?: { date: Date, name: string };
  totalTasksWidgetData?: number;
  taskGraphData?: {
    tasksCompleted: number,
    tasksActive: number,
    tasksPending: number
  };

  setData(projects: ProjectStatistics[]) {
    this.totalTasksWidgetData = this.setTotalTasksData(projects);
    this.taskGraphData = this.setTasksGraphData(projects);
    this.lastUpdateTimeWidgetData = this.setLastUpdateTimeWidgetData(projects);
  }

  setTotalTasksData(projects: ProjectStatistics[]): number {
    let totalTasks = 0;
    projects.forEach(project => totalTasks += +project.tasksTotal);
    return totalTasks;
  }

  setTasksGraphData(projects: ProjectStatistics[]): { tasksCompleted: number, tasksActive: number, tasksPending: number } {
    let totalTasks = 0;
    let tasksCompleted = 0;
    let tasksActive = 0;
    projects.forEach(project => {
      totalTasks += +project.tasksTotal;
      tasksCompleted += +project.tasksCompleted;
      tasksActive += +project.tasksActive;
    })
    return { tasksCompleted: tasksCompleted, tasksActive: tasksActive, tasksPending: totalTasks - tasksCompleted - tasksActive }
  }

  setLastUpdateTimeWidgetData(projects: ProjectStatistics[]): { date: Date, name: string } {
    let lastDate = projects[0].lastUpdateDate;
    let lasUpdateName = projects[0].name;
    projects.forEach(project => {
      if (project.lastUpdateDate > lastDate) {
        lastDate = project.lastUpdateDate;
        lasUpdateName = project.name;
      }
    });
    return { date: lastDate, name: projects.length > 1 ? lasUpdateName : '' };
  }
}
