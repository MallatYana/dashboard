import { Component, Input } from '@angular/core';
import { ProjectStatuses } from '../../../core/interfaces/project-statuses';

@Component({
  selector: 'app-helpers-status',
  standalone: true,
  imports: [],
  templateUrl: './helpers-status.component.html',
  styleUrl: './helpers-status.component.scss'
})
export class HelpersStatusComponent {
  @Input() status?: number | ProjectStatuses;

  statuses = ProjectStatuses;
}
