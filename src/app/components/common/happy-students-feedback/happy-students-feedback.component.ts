import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-happy-students-feedback',
    templateUrl: './happy-students-feedback.component.html',
    styleUrls: ['./happy-students-feedback.component.scss']
})
export class HappyStudentsFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    testimonialsWrapSlides: OwlOptions = {
        dots: true,
        margin: 30,
		loop: true,
        nav: false,
        autoplay: true,
        stagePadding: 50,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            576: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            1200: {
                items: 3,
            }
        }
    }

}