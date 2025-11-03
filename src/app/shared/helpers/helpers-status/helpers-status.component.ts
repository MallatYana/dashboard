import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectStatuses } from '../../../core/interfaces/project-statuses';

@Component({
  selector: 'app-helpers-status',
  standalone: true,
  templateUrl: './helpers-status.component.html',
  styleUrl: './helpers-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpersStatusComponent {
  @Input() status?: number;

  statuses = ProjectStatuses;
}
