import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProjectsListFiltersComponent } from '../dashboard-projects-list-filters/dashboard-projects-list-filters.component';

@Component({
  selector: 'app-dashboard-projects-list-header',
  standalone: true,
  imports: [ CommonModule, DashboardProjectsListFiltersComponent ],
  templateUrl: './dashboard-projects-list-header.component.html',
  styleUrl: './dashboard-projects-list-header.component.scss'
})
export class DashboardProjectsListHeaderComponent {
  @Input() isSelected: boolean = false;
  @Output() onActiveTab = new EventEmitter<boolean>();

  setActiveTab() {
    this.onActiveTab.emit(true);
  }
}
