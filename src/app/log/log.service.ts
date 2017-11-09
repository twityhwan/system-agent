import { Injectable, EventEmitter } from '@angular/core';

export class LogMessage {
    constructor(public type: string, public msg: string) {
    }
}

export class LogEventType {
    public LOG_MSG: string = "MSG";
    public LOG_ERR: string = "ERR";
    public LOG_WRN: string = "WRN";

    constructor() {}
}

export class LogService {
    public LogEventType: LogEventType = new LogEventType();
    public logAdded$: EventEmitter<LogMessage>;
    private logHistory: LogMessage[] = [];

    constructor() {
        this.logAdded$ = new EventEmitter();
    }

    public history(): LogMessage[] {
        return this.logHistory;
    }

    public add(msg: LogMessage):void {
        console.log("add()");
        this.logHistory.push(msg);
        this.logAdded$.emit(msg);
    }

    public getEmitter() {
        return this.logAdded$;
    }
}
