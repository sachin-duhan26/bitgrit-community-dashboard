import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent implements OnInit {
    ngOnInit() { }
    active_langauge: string = "English";
    supported_languages: Array<{ title: string}> = [
        { title: "English" },
        { title: "Hindi" },
        { title: "Gujrati" },
        { title: "Marathi" },
    ]

    update_language(title: string): void {
        // backend api call!
    }
}
