import { Component, OnInit } from '@angular/core';
import { DashboardProjectsListComponent } from '../dashboard-projects/dashboard-projects-list/dashboard-projects-list.component';
import { DashboardWidgetsContainerComponent } from '../dashboard-widgets/dashboard-widgets-container/dashboard-widgets-container.component';
import { ProjectService } from '../../../../core/services/project.service';
import { Observable, of } from 'rxjs';
import { ProjectStatistics } from '../../../../core/interfaces/project-statistics';
import { AsyncPipe } from '@angular/common';

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
    private projectService: ProjectService
  ) { }

  projects$: Observable<ProjectStatistics[]> = of([] as ProjectStatistics[]);

  ngOnInit() {
    this.projects$ = this.projectService.getItems();
  }
}
