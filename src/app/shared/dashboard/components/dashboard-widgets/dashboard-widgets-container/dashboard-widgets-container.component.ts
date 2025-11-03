import { Component } from '@angular/core';
import { DashboardWidgetsLastUpdateComponent } from '../dashboard-widgets-last-update/dashboard-widgets-last-update.component';
import { DashboardWidgetsTotalTasksComponent } from '../dashboard-widgets-total-tasks/dashboard-widgets-total-tasks.component';
import { DashboardWidgetsStatusComponent } from '../dashboard-widgets-status/dashboard-widgets-status.component';
import { DashboardWidgetsDateRangeComponent } from '../dashboard-widgets-date-range/dashboard-widgets-date-range.component';
import { DashboardWidgetsTasksGraphComponent } from '../dashboard-widgets-tasks-graph/dashboard-widgets-tasks-graph.component';
import { DashboardWidgetsStatusesGraphComponent } from '../dashboard-widgets-statuses-graph/dashboard-widgets-statuses-graph.component';

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
export class DashboardWidgetsContainerComponent {
  a = new Date();
  b = new Date();
}
