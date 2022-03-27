import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-funfacts-feedback',
    templateUrl: './funfacts-feedback.component.html',
    styleUrls: ['./funfacts-feedback.component.scss']
})
export class FunfactsFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    feedbackSlidesTwo: OwlOptions = {
        items: 1,
		loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}