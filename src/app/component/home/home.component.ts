import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
    ) { }
    public sub;
    public display: string;
    ngOnInit() {
        this.sub = this.route.queryParams
            .subscribe(params => this.display = params['display'] || "confirmed");
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
