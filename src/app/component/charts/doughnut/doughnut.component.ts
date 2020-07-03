import { Component, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
    selector: 'doughnut-chart',
    templateUrl: './doughnut.component.html'
})
export class DoughnutComponent {

    public doughnutChartType: ChartType = 'doughnut';
    public colors = [{ backgroundColor: ["#5b3e80", "#cac1d9", "#2f2452","#f0e9f4" ,"#724b98","#2f2451"] }];
    public chartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels: { padding: 30, fontSize: 16, boxWidth: 20 }
        }
    };

    @Input() show_legend: boolean = true;
    @Input() labels: Label[];
    @Input() data: SingleDataSet;

}
