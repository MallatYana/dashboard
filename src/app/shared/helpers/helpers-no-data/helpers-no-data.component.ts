import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-helpers-no-data',
  standalone: true,
  templateUrl: './helpers-no-data.component.html',
  styleUrl: './helpers-no-data.component.scss'
})
export class HelpersNoDataComponent {
  @Input() color: string = 'black';
  @Input() description?: string;

  showDescription = false;
}
