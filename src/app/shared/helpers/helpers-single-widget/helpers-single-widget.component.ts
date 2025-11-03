import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helpers-single-widget',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './helpers-single-widget.component.html',
  styleUrl: './helpers-single-widget.component.scss'
})
export class HelpersSingleWidgetComponent {
  @Output() remove = new EventEmitter<boolean>();

  removeWidget() {
    this.remove.emit(true)
  }
}
