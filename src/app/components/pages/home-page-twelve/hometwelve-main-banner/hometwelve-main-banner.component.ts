import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
    selector: 'app-hometwelve-main-banner',
    templateUrl: './hometwelve-main-banner.component.html',
    styleUrls: ['./hometwelve-main-banner.component.scss']
})
export class HometwelveMainBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

}