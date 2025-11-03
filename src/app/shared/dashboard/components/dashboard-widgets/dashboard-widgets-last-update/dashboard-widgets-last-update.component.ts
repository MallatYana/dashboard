import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  styleUrl: './dashboard-widgets-last-update.component.scss'
})
export class DashboardWidgetsLastUpdateComponent {
  @Input() widgetData?: Date;
  @Output() removeWidget = new EventEmitter<string>();

  widgetName = 'lastUpdate';

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
