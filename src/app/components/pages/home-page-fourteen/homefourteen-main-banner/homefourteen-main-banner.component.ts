import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homefourteen-main-banner',
    templateUrl: './homefourteen-main-banner.component.html',
    styleUrls: ['./homefourteen-main-banner.component.scss']
})
export class HomefourteenMainBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    partnerSlides: OwlOptions = {
		loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 6,
            },
            1200: {
                items: 6,
            }
        }
    }

}