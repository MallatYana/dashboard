import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectService } from '../../../../../core/services/project.service';
import { HelpersSingleWidgetComponent } from '../../../../helpers/helpers-single-widget/helpers-single-widget.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard-widgets-database-connection',
  standalone: true,
  imports: [
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard-widgets-database-connection.component.html',
  styleUrl: './dashboard-widgets-database-connection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardWidgetsDatabaseConnectionComponent implements OnInit {
  @Output() removeWidget = new EventEmitter<string>();
  constructor(
    private projectService: ProjectService
  ) { }

  widgetName = 'databaseConnection';
  databaseConnection$: Observable<{ connection: string }> = of({ connection: 'Pending' })

  ngOnInit() {
    this.databaseConnection$ = this.projectService.getDataPolling();
  }

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
