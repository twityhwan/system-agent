import { Component } from '@angular/core';

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})

export class SettingComponent {
    title = 'Setting';
    toggleStyle = {
        On: {backgroundColor: 'LawnGreen'},
        Off: {backgroundColor: 'LightGrey'}
    }

    hw_setting_visible:boolean = true;

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

    hwlist = [
        {name: "WLAN", device: undefined, status: 'Off'},
        {name: "USB1", device: {name: "WiFi Dongle"}, status: 'Off'},
        {name: "USB2", device: {name: "Sandisk"}, status: 'Off'},
        {name: "USB3", device: undefined, status: 'Off'},
    ];

    changeStatus = (element) => {
        if (element.textContent === "On")
            element.textContent = "Off";
        else if (element.textContent === "Off")
            element.textContent = "On";
        element.style.backgroundColor = this.toggleStyle[element.textContent].backgroundColor;
    }

    control = (hw:Object, element) => {
        console.log("control()", hw);
        if (element.textContent === "Mount") {
            // TODO: popup
        } else if (element.textContent === "Unmount") {
            // TODO: remove
        }
    }

    getControlText = (hw) => {
        if (hw.device !== undefined)
            return "Unmount";
        else
            return "Mount";
    }
}
