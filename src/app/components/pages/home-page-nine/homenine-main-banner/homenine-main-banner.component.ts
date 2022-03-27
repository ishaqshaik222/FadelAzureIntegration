import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homenine-main-banner',
    templateUrl: './homenine-main-banner.component.html',
    styleUrls: ['./homenine-main-banner.component.scss']
})
export class HomenineMainBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    healthCoachingBannerSlides: OwlOptions = {
        items: 1,
        nav: true,
		loop: true,
        dots: false,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}