import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }
    language: string = "english";
    icons: Array<{ title: string, url: string }> = [
        { url: '/', title: '/assets/icons/dashboard.svg' },
        { url: '/about', title: '/assets/icons/help_outline.svg' },
        { url: '/language', title: '/assets/icons/language.svg' },
    ]

    // "value" needs to updated as per the data from backend!
    header_cards: Array<{ active: boolean, title: string, value: string }> = [
        { active: true, title: 'confirmed', value: "89,83,023" },
        { active: false, title: 'active', value: "21,323" },
        { active: false, title: 'recovered', value: "23,289" },
        { active: false, title: 'deaths', value: "12,133" },
        { active: false, title: 'tested', value: "92,12,323" },
        { active: false, title: 'critical', value: "12,123" },
        { active: false, title: 'death rate', value: "89%" },
    ]

    ngOnInit() { }

    switch_theme(): void {
        window.alert('Theme swicther under process');
    }

    card_navigator(title: string): void {
        this.router.navigate(['/'], { queryParams: { display: title } });
    }
}
