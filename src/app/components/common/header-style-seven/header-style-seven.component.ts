import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-style-seven',
    templateUrl: './header-style-seven.component.html',
    styleUrls: ['./header-style-seven.component.scss']
})
export class HeaderStyleSevenComponent implements OnInit {

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