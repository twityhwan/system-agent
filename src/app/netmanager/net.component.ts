import { Component } from '@angular/core';

@Component({
    selector: 'net-mgr',
    templateUrl: './net.component.html',
    styleUrls: ['./net.component.css']
})

export class NetComponent {
    title = 'Network Management';
    public selected: object = undefined;

    netdevices = [
        {
            name: "eth0",
            interface: "Ethernet",
            ip: "10.50.1.23",
            mac: "20:3B:5A:50:2C:B8"
        },
        {
            name: "eth1",
            interface: "Ethernet",
            ip: "10.50.1.25",
            mac: "21:3B:5A:51:2C:B8"
        },
        {
            name: "ALTIWLAN",
            interface: "Wi-Fi",
            ip: "10.50.1.105",
            mac: "21:3C:5A:51:2C:C8"
        }
    ];

    netList = {
        onItemClicked: (item: object) => {
            this.selected = item;
        }
    };
}
