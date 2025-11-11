import {
  AfterViewInit,
  Component, ComponentRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-widgets-item',
  standalone: true,
  imports: [ ],
  templateUrl: './dashboard-widgets-item.component.html',
  styleUrl: './dashboard-widgets-item.component.scss'
})
export class DashboardWidgetsItemComponent implements AfterViewInit, OnChanges, OnDestroy {
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

  @ViewChild('widgetContainer', { read: ViewContainerRef })
  widgetContainer!: ViewContainerRef;
  onRemoveSub!: Subscription;

  ngAfterViewInit() {
    this.setWidgetInputs(this.widgetName);
    this.loadAndRenderWidget(this.widgetName);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.widgetContainer) {
      this.setWidgetInputs(this.widgetName);
      this.loadAndRenderWidget(this.widgetName);
    }
  }

  setWidgetInputs(widgetName: string) {
    switch (widgetName) {
      case 'status':
        return this.statusWidgetData
      case 'lastUpdate':
        return this.lastUpdateTimeWidgetData
      case 'totalTasks':
        return this.totalTasksWidgetData
      case 'dateRange':
        return this.dateRangeWidgetData
      case 'tasksGraph':
        return this.taskGraphData
      default:
        return null;
    }
  }

  async loadAndRenderWidget(widgetName: string) {
    this.widgetContainer.clear();
    const component = await this.loadWidgetComponent(widgetName);
    const componentRef = this.widgetContainer.createComponent(component);
    this.setWidgetInputs(this.widgetName);
    if (this.setWidgetInputs(widgetName)) {
      componentRef.setInput('widgetData', this.setWidgetInputs(widgetName))
    }
    this.onRemoveSub = (componentRef.instance as any).removeWidget.subscribe(
      () => this.onRemove(widgetName)
    );
  }

  async loadWidgetComponent(widgetName: string) {
    const componentMap: Record<string, () => Promise<any>> = {
      'databaseConnection': () => import('../dashboard-widgets-database-connection/dashboard-widgets-database-connection.component').then(m => m.DashboardWidgetsDatabaseConnectionComponent),
      'status': () => import('../dashboard-widgets-status/dashboard-widgets-status.component').then(m => m.DashboardWidgetsStatusComponent),
      'lastUpdate': () => import('../dashboard-widgets-last-update/dashboard-widgets-last-update.component').then(m => m.DashboardWidgetsLastUpdateComponent),
      'totalTasks': () => import('../dashboard-widgets-total-tasks/dashboard-widgets-total-tasks.component').then(m => m.DashboardWidgetsTotalTasksComponent),
      'dateRange': () => import('../dashboard-widgets-date-range/dashboard-widgets-date-range.component').then(m => m.DashboardWidgetsDateRangeComponent),
      'tasksGraph': () => import('../dashboard-widgets-tasks-graph/dashboard-widgets-tasks-graph.component').then(m => m.DashboardWidgetsTasksGraphComponent),
      'statusesGraph': () => import('../dashboard-widgets-statuses-graph/dashboard-widgets-statuses-graph.component').then(m => m.DashboardWidgetsStatusesGraphComponent),
    };
    return await componentMap[widgetName]();
  }

  onRemove(name: string) {
    this.removeWidget.emit(name);
  }

  ngOnDestroy() {
    if (this.onRemoveSub) this.onRemoveSub.unsubscribe()
  }
}
