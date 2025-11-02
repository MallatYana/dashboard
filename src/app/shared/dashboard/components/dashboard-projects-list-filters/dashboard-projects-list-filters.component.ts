import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardFilters } from '../../../../core/interfaces/dashboard-filters';
import { DashboardProjectsListFilterStatusComponent } from '../dashboard-projects-list-filter-status/dashboard-projects-list-filter-status.component';

@Component({
  selector: 'app-dashboard-projects-list-filters',
  standalone: true,
  imports: [ DashboardProjectsListFilterStatusComponent ],
  templateUrl: './dashboard-projects-list-filters.component.html',
  styleUrl: './dashboard-projects-list-filters.component.scss'
})
export class DashboardProjectsListFiltersComponent {
  @Input() selectedFilers: DashboardFilters = { } as DashboardFilters;
  @Output() onFiltersChange = new EventEmitter<DashboardFilters>();

  onStatusChange(status: number) {
    this.selectedFilers.status = status;
    this.onFiltersChange.emit({ ...this.selectedFilers, status: status }); //ЭМИТИМ ИЛИ ДЕЛАЕМ РОУТ СЕРВИС
  }
}
