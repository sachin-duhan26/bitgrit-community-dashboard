import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private _headerService: HeaderService
    ) { }

    public sub;
    public display: string;

    ngOnInit() {
        this._headerService.update_header_status(true);
        this.sub = this.route.queryParams
            .subscribe(params => this.display = params['display'] || "confirmed");
    }

    country_list: Array<{ title: string, stats: string, active_cases: string }> = [
        { title: "China", active_cases: '81.2K', stats: "40%" },
        { title: "Italy", active_cases: '53.1K', stats: "17%" },
        { title: "USA", active_cases: '17.8K', stats: "9%" },
        { title: "Spain", active_cases: '8.02K', stats: "4%" },
    ]

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
