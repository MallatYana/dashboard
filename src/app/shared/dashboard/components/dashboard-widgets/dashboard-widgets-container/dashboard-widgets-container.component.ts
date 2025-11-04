import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
import { DashboardWidgetsItemComponent } from '../dashboard-widgets-item/dashboard-widgets-item.component';
import { ProjectStatistics } from '../../../../../core/interfaces/project-statistics';
import { DashboardFilters } from '../../../../../core/interfaces/dashboard-filters';
import { ProjectStatuses } from '../../../../../core/interfaces/project-statuses';

@Component({
  selector: 'app-dashboard-widgets-container',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    DashboardWidgetsItemComponent,
    HelpersNoDataComponent
  ],
  templateUrl: './dashboard-widgets-container.component.html',
  styleUrl: './dashboard-widgets-container.component.scss'
})
export class DashboardWidgetsContainerComponent implements OnChanges {
  @Input() projects: ProjectStatistics[] | null = [];
  @Input() selectedFilters: DashboardFilters | null = { } as DashboardFilters;
  filteredProjects: ProjectStatistics[] = [];

  widgetsOrder = ['databaseConnection', 'status', 'lastUpdate', 'dateRange', 'statusesGraph', 'tasksGraph', 'totalTasks']

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

  onRemove(name: string) {
    console.log('removing', name)
  }
  allStatuses = ProjectStatuses;

  lastUpdateTimeWidgetData?: { date: Date, name: string };
  totalTasksWidgetData?: number;
  taskGraphData?: {
    tasksCompleted: number,
    tasksActive: number,
    tasksPending: number
  };
  statusWidgetData: number | undefined;
  dateRangeWidgetData: Date[] | undefined;

  setData(projects: ProjectStatistics[]) {
    this.totalTasksWidgetData = this.setTotalTasksData(projects);
    this.taskGraphData = this.setTasksGraphData(projects);
    this.lastUpdateTimeWidgetData = this.setLastUpdateTimeWidgetData(projects);
    if (projects.length === 1) {
      this.statusWidgetData = projects[0].status;
      this.dateRangeWidgetData = [projects[0].startDate, projects[0].endDate];
    } else {
      this.statusWidgetData = undefined;
      this.dateRangeWidgetData = undefined;
    }
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgetsOrder, event.previousIndex, event.currentIndex);
    localStorage.setItem('appDashOrder', this.widgetsOrder.toString());
  }
}
