import { Component } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

@Component({
    selector: 'dashboard',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.css']
})

export class DashComponent {
    title = 'Dashboard';
    persons = [];
    itemResource = new DataTableResource(this.persons);
}
