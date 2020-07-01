import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    public language: string = "english";

    icons: Array<{ title: string, url: string }> = [
        { url: '/', title: '/assets/icons/dashboard.svg' },
        { url: '/community', title: '/assets/icons/group.svg'},
        { url: '/about', title: '/assets/icons/help_outline.svg' },
        { url: '/language', title: '/assets/icons/language.svg' },
    ]

    ngOnInit() { }

    switch_theme(): void {
        window.alert('Theme swicther under process');
    }
}
