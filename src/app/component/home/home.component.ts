import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private _headerService: HeaderService,
        private router: Router
    ) { }

    public sub;
    public style_color: string = "#d1c4e9";
    public display: string;

    ngOnInit() {
        this._headerService.update_header_status(true);
        this.sub = this.route.queryParams
            .subscribe(params => this.display = params['display'] || "Data Science");
    }

    private _country_list: Array<Country> = [
        { title: "India", active_cases: '81.2K', stats: "40%" },
        { title: "Japan", active_cases: '53.1K', stats: "17%" },
        { title: "USA", active_cases: '17.8K', stats: "9%" },
        { title: "Europe", active_cases: '8.02K', stats: "4%" },
    ]

    get country_list(): Array<Country> {
        return this._country_list
    }

    // "value" needs to updated as per the data from backend!
    // active is used for shadow in front-end!
    header_cards: Array<{ active: boolean, title: string, value: string }> = [
        { active: false, title: 'Data Science', value: "89,83,023" },
        { active: false, title: 'Artificail Intellgence', value: "21,323" },
        { active: false, title: 'Computer Vision', value: "23,289" },
        { active: false, title: 'Data Analytics', value: "12,133" },
        { active: false, title: 'Deep Learning', value: "92,12,323" },
        { active: false, title: 'Data Visualization', value: "12,123" },
    ]

    card_navigator(title: string): void {
        // updating shadow for UI
        this.header_cards.forEach(el => {
            if (el.title == title) el.active = true;
            else el.active = false;
        });
        this.router.navigate(['/'], { queryParams: { display: title } });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

interface Country { title: string, stats: string, active_cases: string }