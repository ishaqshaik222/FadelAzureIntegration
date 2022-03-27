import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-style-five',
    templateUrl: './header-style-five.component.html',
    styleUrls: ['./header-style-five.component.scss']
})
export class HeaderStyleFiveComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }

}