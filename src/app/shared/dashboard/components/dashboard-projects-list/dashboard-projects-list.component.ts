import { Component, Input, OnInit } from '@angular/core';
import { DashboardProjectsListItemComponent } from '../dashboard-projects-list-item/dashboard-projects-list-item.component';
import { DashboardProjectsListHeaderComponent } from '../dashboard-projects-list-header/dashboard-projects-list-header.component';
import { ProjectStatistics } from '../../../../core/interfaces/project-statistics';
import { FiltersService } from '../../../../core/services/filters.service';

@Component({
  selector: 'app-dashboard-projects-list',
  standalone: true,
  imports: [ DashboardProjectsListItemComponent, DashboardProjectsListHeaderComponent ],
  templateUrl: './dashboard-projects-list.component.html',
  styleUrl: './dashboard-projects-list.component.scss'
})
export class DashboardProjectsListComponent implements OnInit {
  @Input() projects: ProjectStatistics[] | null = [];
  activeTab: string = '';

  setActiveTab(id: string) {
    this.activeTab = id;
    this.filterService.setFilters({ id: id })
  }

  constructor(
    private filterService: FiltersService
  ) { }

  ngOnInit() { }
}
