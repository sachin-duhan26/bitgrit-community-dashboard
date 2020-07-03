import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

// used earlier but removed later!
export class HeaderService {

    private show_header_source = new BehaviorSubject(true);
    private language_source = new BehaviorSubject<string>("english");

    public show_header = this.show_header_source.asObservable(); // this is not used!
    public language = this.language_source.asObservable();

    constructor() { }

    update_header_status(status: boolean): void {
        this.show_header_source.next(status);
    }

    update_language(language: string): void {
        this.language_source.next(language);
    }
}
