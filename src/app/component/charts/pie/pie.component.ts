import { Component, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
    selector: 'pie-chart',
    templateUrl: './pie.component.html'
})
export class PieComponent {

    public pieChartType: ChartType = 'pie';
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels: { padding: 30, fontSize: 17, boxWidth: 20 }
        }
    };

    @Input() colors;
    @Input() labels: Label[];
    @Input() data: SingleDataSet;
    @Input() show_legend: boolean = true;
    public pieChartPlugins = [];

}
