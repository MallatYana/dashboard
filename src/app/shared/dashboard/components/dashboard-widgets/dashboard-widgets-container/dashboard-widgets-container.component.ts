import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
import { DashboardWidgetsItemComponent } from '../dashboard-widgets-item/dashboard-widgets-item.component';
import { DashboardWidgetsAddListComponent } from '../dashboard-widgets-add-list/dashboard-widgets-add-list.component';
import { ProjectStatistics } from '../../../../../core/interfaces/project-statistics';
import { DashboardFilters } from '../../../../../core/interfaces/dashboard-filters';
import { ProjectStatuses } from '../../../../../core/constants/project-statuses';
import { WidgetList } from '../../../../../core/constants/widget-list';

@Component({
  selector: 'app-dashboard-widgets-container',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    DashboardWidgetsItemComponent,
    DashboardWidgetsAddListComponent,
    HelpersNoDataComponent
  ],
  templateUrl: './dashboard-widgets-container.component.html',
  styleUrl: './dashboard-widgets-container.component.scss'
})
export class DashboardWidgetsContainerComponent implements OnChanges, OnInit {
  @Input() projects: ProjectStatistics[] | null = [];
  @Input() selectedFilters: DashboardFilters | null = { } as DashboardFilters;
  filteredProjects: ProjectStatistics[] = [];

  widgetsOrder: string[] = [];

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

  ngOnInit() {
    this.checkAndApplyOrder();
  }

  onRemoveWidget(name: string) {
    this.widgetsOrder = this.widgetsOrder.filter(item => item !== name);
    this.changeOrder(this.widgetsOrder);
  }
  onAddWidget(name: string) {
    this.widgetsOrder.push(name);
    this.changeOrder(this.widgetsOrder);
  }
  checkAndApplyOrder() {
    this.widgetsOrder = localStorage.getItem('appDashOrder')
      ? localStorage.getItem('appDashOrder')!.split(',')
      : WidgetList
  }
  changeOrder(orderArr: string[]) {
    localStorage.setItem('appDashOrder', orderArr.toString());
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgetsOrder, event.previousIndex, event.currentIndex);
    this.changeOrder(this.widgetsOrder);
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
}
