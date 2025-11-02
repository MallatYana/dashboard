import { Component, Input } from '@angular/core';
import { DashboardProjectsListItemComponent } from '../dashboard-projects-list-item/dashboard-projects-list-item.component';
import { ProjectStatistics } from '../../../../core/interfaces/project-statistics';

@Component({
  selector: 'app-dashboard-projects-list',
  standalone: true,
  imports: [ DashboardProjectsListItemComponent ],
  templateUrl: './dashboard-projects-list.component.html',
  styleUrl: './dashboard-projects-list.component.scss'
})
export class DashboardProjectsListComponent {
  @Input() projects: ProjectStatistics[] | null = [];

  setUrl(id: number) {
    console.log(id)
  }
}
