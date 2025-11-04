import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { WidgetList, WidgetNames } from '../../../../../core/constants/widget-list';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard-widgets-add-list',
  standalone: true,
  imports: [ JsonPipe ],
  templateUrl: './dashboard-widgets-add-list.component.html',
  styleUrl: './dashboard-widgets-add-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardWidgetsAddListComponent implements OnChanges {
  @Input() currentWidgets: string[] = [];
  @Output() addWidget = new EventEmitter<string>();

  allWidgets = WidgetList;
  widgetNames = WidgetNames;
  addableWidgets: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentWidgets']) {
      this.addableWidgets = this.allWidgets.filter(item => !this.currentWidgets.includes(item))
    }
  }

  getLabel(name: string): string | undefined {
    return WidgetNames.get(name)
  }

  addNewWidget(name: string) {
    this.addWidget.emit(name);
    this.addableWidgets = this.addableWidgets.filter(item => item !== name)
  }
}
