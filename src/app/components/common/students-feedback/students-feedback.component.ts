import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-students-feedback',
    templateUrl: './students-feedback.component.html',
    styleUrls: ['./students-feedback.component.scss']
})
export class StudentsFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    studentsFeedbackSlides: OwlOptions = {
        items: 1,
        nav: true,
		loop: true,
        dots: false,
        autoplay: true,
        mouseDrag: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ]
    }

}