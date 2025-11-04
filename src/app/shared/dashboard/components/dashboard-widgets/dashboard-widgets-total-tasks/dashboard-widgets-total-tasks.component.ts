import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HelpersSingleWidgetComponent } from '../../../../helpers/helpers-single-widget/helpers-single-widget.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';

@Component({
  selector: 'app-dashboard-widgets-total-tasks',
  standalone: true,
  imports: [
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent,
  ],
  templateUrl: './dashboard-widgets-total-tasks.component.html',
  styleUrl: './dashboard-widgets-total-tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardWidgetsTotalTasksComponent {
  @Input() widgetName = 'totalTasks';
  @Input() widgetData?: number;
  @Output() removeWidget = new EventEmitter<string>();

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
