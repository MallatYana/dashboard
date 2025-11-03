import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpersSingleWidgetComponent } from '../../../../helpers/helpers-single-widget/helpers-single-widget.component';
import { HelpersNoDataComponent } from '../../../../helpers/helpers-no-data/helpers-no-data.component';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-dashboard-widgets-tasks-graph',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective,
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent
  ],
  templateUrl: './dashboard-widgets-tasks-graph.component.html',
  styleUrl: './dashboard-widgets-tasks-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ provideEcharts()],
})
export class DashboardWidgetsTasksGraphComponent {
  @Input() widgetData?: {
    tasksCompleted: number,
    tasksActive: number,
    tasksTotal: number
  };
  @Output() removeWidget = new EventEmitter<string>();

  widgetName = 'tasksGraph';

  chartOption: EChartsOption = {
    title: {
      text: 'Tasks statistics',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        data: [
          { value: 54, name: 'Pending' },
          { value: 32, name: 'Active' },
          { value: 9, name: 'Completed' }],
      },
    ],
  } as EChartsOption;
}
