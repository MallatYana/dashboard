import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HelpersSingleWidgetComponent } from '../../../../helpers/helpers-single-widget/helpers-single-widget.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-widgets-last-update',
  standalone: true,
  imports: [
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent,
    DatePipe
  ],
  templateUrl: './dashboard-widgets-last-update.component.html',
  styleUrl: './dashboard-widgets-last-update.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardWidgetsLastUpdateComponent {
  @Input() widgetName = 'lastUpdate';
  @Input() widgetData?: { date: Date, name: string };
  @Output() removeWidget = new EventEmitter<string>();

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
