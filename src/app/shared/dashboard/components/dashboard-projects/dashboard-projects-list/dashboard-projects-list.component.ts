import { Component, Input, OnInit } from '@angular/core';
import { DashboardProjectsListItemComponent } from '../dashboard-projects-list-item/dashboard-projects-list-item.component';
import { DashboardProjectsListHeaderComponent } from '../dashboard-projects-list-header/dashboard-projects-list-header.component';
import { ProjectStatistics } from '../../../../../core/interfaces/project-statistics';
import { FiltersService } from '../../../../../core/services/filters.service';
import {Observable, of} from 'rxjs';
import {DashboardFilters} from '../../../../../core/interfaces/dashboard-filters';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-projects-list',
  standalone: true,
  imports: [
    DashboardProjectsListItemComponent,
    DashboardProjectsListHeaderComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard-projects-list.component.html',
  styleUrl: './dashboard-projects-list.component.scss'
})
export class DashboardProjectsListComponent implements OnInit {
  @Input() projects: ProjectStatistics[] | null = [];
  selectedFilters$: Observable<DashboardFilters> = of({ } as DashboardFilters);

  setActiveTab(id: string) {
    this.filterService.setFilters({ id: id })
  }

  constructor(
    private filterService: FiltersService
  ) { }

  ngOnInit() {
    this.selectedFilters$ = this.filterService.filters;
  }
}
