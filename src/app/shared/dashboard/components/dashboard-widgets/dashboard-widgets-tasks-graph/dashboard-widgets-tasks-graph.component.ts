import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
export class DashboardWidgetsTasksGraphComponent implements OnChanges {
  @Input() widgetName = 'tasksGraph';
  @Input() widgetData?: {
    tasksCompleted: number,
    tasksActive: number,
    tasksPending: number
  };
  @Output() removeWidget = new EventEmitter<string>();

  chartOption: EChartsOption = { } as EChartsOption;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['widgetData']) {
      this.chartOption = {
        title: {
          text: 'Tasks statistics',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '5%',
          left: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
              { value: this.widgetData ? this.widgetData.tasksPending : 0, name: 'Pending' },
              { value: this.widgetData ? this.widgetData.tasksActive : 0, name: 'Active' },
              { value: this.widgetData ? this.widgetData.tasksCompleted : 0, name: 'Completed' }
            ].filter(item => !!item.value),
            itemStyle: {
              color: (params: any) => {
                const colors = [];
                if (this.widgetData && this.widgetData.tasksPending) colors.push('#ffc107');
                if (this.widgetData && this.widgetData.tasksActive) colors.push('#0dcaf0');
                if (this.widgetData && this.widgetData.tasksCompleted) colors.push('#198754');
                return colors[params.dataIndex];
              }
            }
          },
        ],
      } as EChartsOption;
    }
  }
}
