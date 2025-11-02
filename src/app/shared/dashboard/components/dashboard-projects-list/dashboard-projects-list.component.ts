import { Component } from '@angular/core';
import { DashboardProjectsListItemComponent } from '../dashboard-projects-list-item/dashboard-projects-list-item.component';

@Component({
  selector: 'app-dashboard-projects-list',
  standalone: true,
  imports: [ DashboardProjectsListItemComponent ],
  templateUrl: './dashboard-projects-list.component.html',
  styleUrl: './dashboard-projects-list.component.scss'
})
export class DashboardProjectsListComponent {

}
