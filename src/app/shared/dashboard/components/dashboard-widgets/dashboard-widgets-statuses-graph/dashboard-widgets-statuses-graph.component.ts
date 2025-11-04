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
  selector: 'app-dashboard-widgets-statuses-graph',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective,
    HelpersSingleWidgetComponent,
    HelpersNoDataComponent
  ],
  templateUrl: './dashboard-widgets-statuses-graph.component.html',
  styleUrl: './dashboard-widgets-statuses-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ provideEcharts()],
})
export class DashboardWidgetsStatusesGraphComponent {
  @Input() widgetName = 'status';
  @Input() widgetData?: {
    pending: number,
    active: number,
    completed: number,
    failed: number,
    abandoned: number,
    unknown: number
  };
  @Output() removeWidget = new EventEmitter<string>();

  chartOption: EChartsOption = {
    title: {
      text: 'Project statuses',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      data: ['Pending', 'Active', 'Completed', 'Failed', 'Abandoned', 'Unknown']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [
          { value: 54, name: 'Pending' },
          { value: 32, name: 'Active' },
          { value: 9, name: 'Completed' },
          { value: 10, name: 'Failed' },
          { value: 2, name: 'Abandoned' },
          { value: 2, name: 'Unknown' },
        ],
        itemStyle: {
          color: (params: any) => {
            const colors = ['#ffc107', '#0dcaf0', '#198754', '#dc3545', '#6c757d', '#000000'];
            return colors[params.dataIndex];
          }
        }
      },
    ],
  } as EChartsOption;

  onRemove() {
    this.removeWidget.emit(this.widgetName);
  }
}
