import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardWidgetsLastUpdateComponent } from '../dashboard-widgets-last-update/dashboard-widgets-last-update.component';
import { DashboardWidgetsTotalTasksComponent } from '../dashboard-widgets-total-tasks/dashboard-widgets-total-tasks.component';
import { DashboardWidgetsStatusComponent } from '../dashboard-widgets-status/dashboard-widgets-status.component';
import { DashboardWidgetsDateRangeComponent } from '../dashboard-widgets-date-range/dashboard-widgets-date-range.component';
import { DashboardWidgetsTasksGraphComponent } from '../dashboard-widgets-tasks-graph/dashboard-widgets-tasks-graph.component';
import { DashboardWidgetsStatusesGraphComponent } from '../dashboard-widgets-statuses-graph/dashboard-widgets-statuses-graph.component';
import { DashboardWidgetsDatabaseConnectionComponent } from '../dashboard-widgets-database-connection/dashboard-widgets-database-connection.component';

@Component({
  selector: 'app-dashboard-widgets-item',
  standalone: true,
  imports: [
    DashboardWidgetsLastUpdateComponent,
    DashboardWidgetsTotalTasksComponent,
    DashboardWidgetsStatusComponent,
    DashboardWidgetsDateRangeComponent,
    DashboardWidgetsTasksGraphComponent,
    DashboardWidgetsStatusesGraphComponent,
    DashboardWidgetsDatabaseConnectionComponent,
  ],
  templateUrl: './dashboard-widgets-item.component.html',
  styleUrl: './dashboard-widgets-item.component.scss'
})
export class DashboardWidgetsItemComponent {
  @Input() widgetName!: string;
  @Input() lastUpdateTimeWidgetData?: { date: Date, name: string };
  @Input() totalTasksWidgetData?: number;
  @Input() taskGraphData?: {
    tasksCompleted: number,
    tasksActive: number,
    tasksPending: number
  };
  @Input() statusWidgetData?: number;
  @Input() dateRangeWidgetData?: Date[];
  @Output() removeWidget = new EventEmitter<string>();

  onRemove(name: string) {
    this.removeWidget.emit(name);
  }
}
