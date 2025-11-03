import { Component, OnInit } from '@angular/core';
import { DashboardProjectsListComponent } from '../dashboard-projects/dashboard-projects-list/dashboard-projects-list.component';
import { DashboardWidgetsContainerComponent } from '../dashboard-widgets/dashboard-widgets-container/dashboard-widgets-container.component';
import { ProjectService } from '../../../../core/services/project.service';
import { Observable, of } from 'rxjs';
import { ProjectStatistics } from '../../../../core/interfaces/project-statistics';
import { FiltersService } from '../../../../core/services/filters.service';
import { AsyncPipe } from '@angular/common';
import {DashboardFilters} from "../../../../core/interfaces/dashboard-filters";

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [
    DashboardProjectsListComponent,
    DashboardWidgetsContainerComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private filterService: FiltersService
  ) { }

  projects$: Observable<ProjectStatistics[]> = of([] as ProjectStatistics[]);
  selectedFilters$: Observable<DashboardFilters> = of({ } as DashboardFilters);

  ngOnInit() {
    this.projects$ = this.projectService.getItems();
    this.selectedFilters$ = this.filterService.filters;
  }
}
