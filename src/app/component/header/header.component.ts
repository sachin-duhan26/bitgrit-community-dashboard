import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }
    language: string = "english";
    icons: Array<{ title: string, url: string }> = [
        { url: '/', title: '/assets/icons/dashboard.svg' },
        { url: '/about', title: '/assets/icons/help_outline.svg' },
        { url: '/language', title: '/assets/icons/language.svg' },
        { url: '/theme', title: '/assets/icons/moon.svg' },
    ]

    header_cards: Array<{ title: string, value: string }> = [
        { title: 'confirmed', value: "89,83,023" },
        { title: 'active', value: "21,323" },
        { title: 'recovered', value: "23,289" },
        { title: 'deaths', value: "12,133" },
        { title: 'tested', value: "92,12,323" },
        { title: 'critical', value: "12,123" },
        { title: 'death rate', value: "89%" },
    ]

    ngOnInit() {
    }

}
