import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.css']
})

export class CommunityComponent implements OnInit {

    constructor() { }
    ngOnInit() { }

    public community_colors = [{ backgroundColor: ["#724a96", "#2f2452"] }];
    public community_labels: Label[] = ['Offline Community', 'Online Community'];
    public community_data: SingleDataSet = [6000, 15000];

    public gender_colors = [{ backgroundColor: ["#ff4081", "#2196f3"] }];
    public gender_labels: Label[] = ['Female', 'Male'];
    public gender_data: SingleDataSet = [1500, 19000];

}
