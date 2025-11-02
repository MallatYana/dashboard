import { Component } from '@angular/core';
import { DashboardProjectsListComponent } from "../dashboard-projects-list/dashboard-projects-list.component";

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [ DashboardProjectsListComponent ],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {

}
