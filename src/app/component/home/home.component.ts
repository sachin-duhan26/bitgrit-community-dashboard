import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
