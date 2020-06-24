import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _headerService: HeaderService
    ) { }

    public language: string = "english";
    public sub;
    public route_sub;
    public display: string;
    public show_header: boolean = true;

    icons: Array<{ title: string, url: string }> = [
        { url: '/', title: '/assets/icons/dashboard.svg' },
        { url: '/about', title: '/assets/icons/help_outline.svg' },
        { url: '/language', title: '/assets/icons/language.svg' },
    ]

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

    ngOnInit() {
        this._headerService.update_header_status(true);
        this._headerService.show_header.subscribe((status: boolean) => this.show_header = status);
        this.sub = this.route.queryParams
            .subscribe(params => this.display = params['display'] || "confirmed");
    }

    switch_theme(): void {
        window.alert('Theme swicther under process');
    }

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
