import { Component } from '@angular/core';

import { LogService } from '../log/log.service';

@Component({
    selector: 'sys-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.css']
})

export class LogComponent {
    title = 'System Log';
    subscription: any;

    constructor(private logService: LogService) {}

    ngOnInit() {
        this.subscription = this.logService.getEmitter()
            .subscribe(log => this.onEventHandler(log));
    }

    onEventHandler(log: any) {
        console.log("onEventHandler()", log);
    }
}
