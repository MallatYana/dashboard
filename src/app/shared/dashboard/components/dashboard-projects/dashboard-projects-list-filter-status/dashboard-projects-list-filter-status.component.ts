import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardFilters } from '../../../../../core/interfaces/dashboard-filters';
import { ProjectStatuses } from '../../../../../core/interfaces/project-statuses';
import { HelpersStatusComponent } from '../../../../helpers/helpers-status/helpers-status.component';

@Component({
  selector: 'app-dashboard-projects-list-filter-status',
  standalone: true,
  imports: [ FormsModule, HelpersStatusComponent ],
  templateUrl: './dashboard-projects-list-filter-status.component.html',
  styleUrl: './dashboard-projects-list-filter-status.component.scss'
})
export class DashboardProjectsListFilterStatusComponent {
  @Input() selectedStatus: number | undefined = undefined;
  @Output() statusChanged = new EventEmitter<Partial<DashboardFilters>>();

  allStatuses = Object.keys(ProjectStatuses).slice(0, Object.keys(ProjectStatuses).length / 2).map(s => +s);

  onStatusChange($event: number) {
    this.statusChanged.emit({ status: $event })
  }
}
