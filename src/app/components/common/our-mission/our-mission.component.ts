import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-our-mission',
    templateUrl: './our-mission.component.html',
    styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {
	content: any;

    constructor(private _authService: AuthService) { }

    ngOnInit(): void {
		this.GetBannerContent();
    }

	GetBannerContent() {
		//debugger
		this._authService.GetBannerContent().subscribe((finalresult: any) => {
		  debugger
		  if (finalresult.status == "200") {
			//debugger
			this.content=finalresult.result
		  }
		  else {
	
		  }
		});
	  }

    missionSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}