import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
    selector: 'doughnut-chart',
    templateUrl: './doughnut.component.html'
})
export class DoughnutComponent implements OnInit {

    public chartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels: { padding: 30, fontSize: 17, boxWidth: 20 }
        }
    };
    public labels: Label[] = ['Machine Learning', 'AI', 'Computer vision', 'Data Analytics', 'Data Science', 'Data Visualization'];
    public data: SingleDataSet = [350, 450, 100, 234, 543, 343];
    @Input() show_legend: boolean = true;
    public doughnutChartType: ChartType = 'doughnut';
    public colors = [{ backgroundColor: ["#5b3e80", "#cac1d9", "#2f2452","#f0e9f4" ,"#724b98","#2f2451"] }];

    constructor() { }

    ngOnInit() {
    }

}
