import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private _headerService: HeaderService) { }

    public language: string = '';
    icons: Array<{ title: string, url: string }> = [
        { url: '/', title: '/assets/icons/dashboard.svg' },
        { url: '/community', title: '/assets/icons/group.svg' },
        { url: '/about', title: '/assets/icons/help_outline.svg' },
        { url: '/language', title: '/assets/icons/language.svg' },
    ]

    ngOnInit() { this._headerService.language.subscribe(language => this.language = language); }

    switch_theme(): void {
        window.alert('Theme swicther under process');
    }
}
