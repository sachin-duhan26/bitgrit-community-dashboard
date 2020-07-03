import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent implements OnInit {

    constructor(private headerService: HeaderService) { }
    ngOnInit() { }

    active_langauge: string = "english";
    supported_languages: Array<{ title: string }> = [
        { title: "english" },
        { title: "hindi" },
        { title: "gujrati" },
        { title: "marathi" },
    ]

    update_language(title: string): void {
        // backend api call!

        // use the code below one the response is recvived from backend
        if (title == this.active_langauge) return;
        else this.active_langauge = title;
        this.headerService.update_language(this.active_langauge);
    }
}
