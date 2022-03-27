import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-gym-feedback',
    templateUrl: './gym-feedback.component.html',
    styleUrls: ['./gym-feedback.component.scss']
})
export class GymFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    feedbackSlidesTwo: OwlOptions = {
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}