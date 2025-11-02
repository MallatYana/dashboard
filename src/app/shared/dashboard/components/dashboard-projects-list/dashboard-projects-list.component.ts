import { Component, Input, OnInit } from '@angular/core';
import { DashboardProjectsListItemComponent } from '../dashboard-projects-list-item/dashboard-projects-list-item.component';
import { DashboardProjectsListHeaderComponent } from '../dashboard-projects-list-header/dashboard-projects-list-header.component';
import { ProjectStatistics } from '../../../../core/interfaces/project-statistics';
import { UrlService } from '../../../../core/services/url.service';

@Component({
  selector: 'app-dashboard-projects-list',
  standalone: true,
  imports: [ DashboardProjectsListItemComponent, DashboardProjectsListHeaderComponent ],
  templateUrl: './dashboard-projects-list.component.html',
  styleUrl: './dashboard-projects-list.component.scss'
})
export class DashboardProjectsListComponent implements OnInit {
  _projects?: ProjectStatistics[];
  @Input() set projects(value: ProjectStatistics[]) {
    this._projects = value;
    if (value) this.checkUrl();
  };
  get projects() {
    return this._projects as ProjectStatistics[];
  }

  activeTable: string = '';
  route: string = '';

  constructor(
    private urlService: UrlService
  ) { }

  ngOnInit() {
    this.route = this.urlService.getLastSegment();
    this.activeTable = this.route === 'dashboard' ? '' : this.route;
  }

  checkUrl() {
    const activeTabIdx = this._projects?.findIndex(project => project.id === this.route);
    if (activeTabIdx === -1) this.setUrl('');
  }

  setUrl(id: string) {
    this.route === 'dashboard'
      ? this.urlService.addSegment(id)
      : this.urlService.changeLastSegment(id);
    this.activeTable = id;
  }
}
