import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-covid-report-cards',
    templateUrl: './covid-report-cards.component.html',
    styleUrls: ['./covid-report-cards.component.css']
})
export class CovidReportCardsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {}

    // "value" needs to updated as per the data from backend!
    // active is used for shadow in front-end!
    header_cards: Array<{ active: boolean, title: string, value: string }> = [
        { active: false, title: 'confirmed', value: "89,83,023" },
        { active: false, title: 'active', value: "21,323" },
        { active: false, title: 'recovered', value: "23,289" },
        { active: false, title: 'deaths', value: "12,133" },
        { active: false, title: 'tested', value: "92,12,323" },
        { active: false, title: 'critical', value: "12,123" },
        { active: false, title: 'death rate', value: "89%" },
    ]

    card_navigator(title: string): void {
        // updating shadow for UI
        this.header_cards.forEach(el => {
            if (el.title == title) el.active = true;
            else el.active = false;
        });
        this.router.navigate(['/'], { queryParams: { display: title } });
    }
}
