import { Component } from '@angular/core';

import { LogComponent } from '../log/log.component';
import { LogService, LogMessage } from '../log/log.service';
import { PanelIcon } from './setting.model';
import {  DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css'],
    providers: [ LogService ]
})

export class SettingComponent {
    panelIcons: PanelIcon[] = new Array<PanelIcon>();
    showDialog: boolean = false;
    title = 'Setting';
    toggleStyle = {
        On: {backgroundColor: 'LawnGreen'},
        Off: {backgroundColor: 'LightGrey'}
    }

    hw_setting_visible:boolean = true;
    isPowerOn:boolean = false;

    hwSettings = {
        onToggled: (element) => {
            console.log("onToggled");
            console.log(this.hw_setting_visible);
            this.hw_setting_visible = !this.hw_setting_visible;
            if (this.hw_setting_visible) {
                element.textContent = "hide";
            } else {
                element.textContent = "show";
            }
        }
    }

    panel_icons = ["Power", "RCU", "Record", "HDD", "LAN", "WAN", "Message"];

    constructor(private logService: LogService) {
        for (let icon of this.panel_icons) {
            this.panelIcons.push(new PanelIcon(icon, false));
        }
    }

    onButtonClicked = (element, icon) => {
        var msg;
        switch(icon.name) {
            case "Power":
                console.log("Power");
                this.isPowerOn = !this.isPowerOn;
                msg = this.isPowerOn ? "PowerOn" : "PowerOff";
                this.logService.add(new LogMessage(this.logService.LogEventType.LOG_MSG, msg));
                break;
            default:
                var msg = element.textContent;
                this.logService.add(new LogMessage(this.logService.LogEventType.LOG_MSG, msg));
                break;

        }
        icon.status = !icon.status;
    }

    hwlist = [
        {name: "WLAN", device: undefined, status: 'Off', control: "Mount"},
        {name: "USB1", device: {name: "WiFi Dongle"}, status: 'Off', control: "Unmount"},
        {name: "USB2", device: {name: "Sandisk"}, status: 'Off', control: "Unmount"},
        {name: "USB3", device: undefined, status: 'Off', control: "Mount"},
    ];

    changeStatus = (element) => {
        if (element.textContent === "On")
            element.textContent = "Off";
        else if (element.textContent === "Off")
            element.textContent = "On";
        element.style.backgroundColor = this.toggleStyle[element.textContent].backgroundColor;
    }

    control = (hw, element) => {
        console.log("control()", hw);
        if (hw.control === "Mount") {
            // TODO: popup
            this.showDialog = true;
        } else if (hw.control === "Unmount") {
            // TODO: remove
        }
    }
}
