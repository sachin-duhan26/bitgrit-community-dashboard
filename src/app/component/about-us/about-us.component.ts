import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
    constructor(private _headerService: HeaderService) { }
    ngOnInit() {
        this._headerService.update_header_status(false);
    }
}
