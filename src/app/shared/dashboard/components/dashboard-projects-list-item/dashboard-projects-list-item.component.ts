import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../core/interfaces/project';
import { HelpersStatusComponent } from '../../../helpers/helpers-status/helpers-status.component';

@Component({
  selector: 'app-dashboard-projects-list-item',
  standalone: true,
  imports: [ CommonModule, HelpersStatusComponent ],
  templateUrl: './dashboard-projects-list-item.component.html',
  styleUrl: './dashboard-projects-list-item.component.scss'
})
export class DashboardProjectsListItemComponent {
  @Input() project!: Project;
  @Input() isSelected: boolean = false;
}
