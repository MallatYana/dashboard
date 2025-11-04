import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectStatuses } from '../../../core/constants/project-statuses';

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
