import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
    constructor(private _headerService: HeaderService) { }
    ngOnInit() {
        this._headerService.update_header_status(false);
    }
}
