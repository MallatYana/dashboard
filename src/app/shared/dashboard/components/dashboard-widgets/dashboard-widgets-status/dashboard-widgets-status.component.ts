import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpersSingleWidgetComponent } from '../../../../helpers/helpers-single-widget/helpers-single-widget.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
import { ProjectStatuses } from '../../../../../core/constants/project-statuses';

@Component({
  selector: 'app-dashboard-widgets-status',
  standalone: true,
  imports: [
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent,
    CommonModule
  ],
  templateUrl: './dashboard-widgets-status.component.html',
  styleUrl: './dashboard-widgets-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardWidgetsStatusComponent {
  @Input() widgetName = 'status';
  @Input() widgetData?: number;
  @Output() removeWidget = new EventEmitter<string>();

  textColors = ['black', 'warning', 'info', 'success', 'danger', 'secondary', 'black']
  statuses = ProjectStatuses;

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
