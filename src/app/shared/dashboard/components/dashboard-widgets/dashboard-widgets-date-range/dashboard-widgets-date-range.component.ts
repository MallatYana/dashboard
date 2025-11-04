import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HelpersSingleWidgetComponent } from '../../../../helpers/helpers-single-widget/helpers-single-widget.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-widgets-date-range',
  standalone: true,
  imports: [
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent,
    DatePipe
  ],
  templateUrl: './dashboard-widgets-date-range.component.html',
  styleUrl: './dashboard-widgets-date-range.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardWidgetsDateRangeComponent {
  @Input() widgetName = 'dateRange';
  @Input() widgetData?: Date[];
  @Output() removeWidget = new EventEmitter<string>();

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
