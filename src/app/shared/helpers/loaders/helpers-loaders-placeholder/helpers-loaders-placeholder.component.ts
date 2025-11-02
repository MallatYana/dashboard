import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-helpers-loaders-placeholder',
  standalone: true,
  templateUrl: './helpers-loaders-placeholder.component.html',
  styleUrl: './helpers-loaders-placeholder.component.scss'
})
export class HelpersLoadersPlaceholderComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100%';
}
