import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

// used earlier but removed later!
export class HeaderService {
    private show_header_source = new BehaviorSubject(true);
    public show_header = this.show_header_source.asObservable();
    constructor() { }
    update_header_status(status: boolean): void {
        this.show_header_source.next(status);
    }
}
