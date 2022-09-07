import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ThisReceiver } from '@angular/compiler';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';

@Component({
    selector: 'app-products-details-page',
    templateUrl: './products-details-page.component.html',
    styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {
	ImageURL: any;
  courseName: any;
  description: any;
  fullDescription: string;
  requirements: string;
  whatLearn: string;
  price: any;
  technologyName: any;
  updatedDate: any;
  courseId: any;
	offerprice: any;

    constructor(
	private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
	private _router:Router,
	@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
	) { }

    ngOnInit(): void {
		debugger
		var id = this.approute.snapshot.params['id'];
		var value=this.approute.snapshot.params['value']
		if(value=="Course"){
			this.Edit(id);
		}
		if(value=="Plan"){
			this.GetPlanById(id);
		}
    }
	Edit(id: any) {
		debugger
		var baseurl = this._authService.baseUrl;
		if (baseurl == "https://localhost:44358/") {
		  baseurl = "https://localhost:44358"
		}
		if (baseurl == "http://testugetitapi.fadelsoft.com/") {
		  baseurl = "http://testugetitapi.fadelsoft.com"
		}
		this._authService.GetcourseById(id).subscribe((finalresult: any) => {
		  debugger
		  console.log(finalresult);
		  //  var finalresult = JSON.parse(result);
		  // rolebyid=finalresult;
		  if (finalresult.status == "200") {
			debugger
			this.courseId=finalresult.result.courseId
			this.courseName=finalresult.result.courseName
			this.description=(finalresult.result.description.replace(/<[^>]*>/g, ''))
			this.fullDescription=(finalresult.result.fullDescription.toString())
			this.requirements=(finalresult.result.requirements.toString())
			// this.whatLearn=(finalresult.result.whatLearn.replace(/<[^>]*>/g, ''))
			this.whatLearn=(finalresult.result.whatLearn).toString();
			this.technologyName=finalresult.result.technologyName;
			// this.updatedDate=finalresult.result.updatedDate;
			this.updatedDate=this.datepipe.transform(finalresult.result.updatedDate, 'dd-MM-yyyy')
			
			this.price=finalresult.result.price
			this.offerprice=finalresult.result.offerPrice
	
			if (finalresult.result.imageURL != null) {
			  this.ImageURL =  finalresult.result.imageURL;
			  // this.noimage=true;;
	
			}
			else {
			  // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";
	
			}
	
			// if (finalresult.result.isActive == true) {
			//     var check = document.getElementById("userchkactive") as HTMLInputElement;
			//     check.checked = true;
			// }
			// else {
			//     var check = document.getElementById("userchkactive") as HTMLInputElement;
			//     check.checked = false;
			// }
			//  this.spinner.hide();
		  }
		  else {
	
		  }
		});
	  }

	  AddToCart(id:any){
		debugger
		// localStorage.setItem('cartplanid',id);
		var val=localStorage.getItem('AzureUserId')
		if(val!='null'){
		var data={
		  UserId:localStorage.getItem('AzureUserId'),
		  ProductId:parseInt(id),
		  CreatedBy:1
		//   Type:'CoursePlan'
		}
		this._authService.AddCartItem(data).subscribe((finalresult: any) => {
		  debugger
		  var finalresult=JSON.parse(finalresult)
		  if(finalresult.status=="200"){
			window.location.reload();
			// this._router.navigate(['/cart']);
		  }
		  else if(finalresult.status=="104"){
			// this._router.navigate(['/cart']);
		  }
		  else{
			
		  }
		})
		}
		else if(val=='null'){
			let myCompOneObj = new HeaderStyleTwoComponent(
				this.approute, this._authService, this._router, this.msalGuardConfig, this.authService, this.msalBroadcastService
			  );
		
			  myCompOneObj.login();
		}

	  
	  }

	  GetPlanById(id:any){
		this._authService.GetCoursePlanById(id).subscribe((finalresult: any) => {
			debugger
			console.log(finalresult);
			//  var finalresult = JSON.parse(result);
			// rolebyid=finalresult;
			if (finalresult.status == "200") {
			  debugger
			  this.courseId=finalresult.result.planId
			  this.courseName=finalresult.result.planName

			  this.updatedDate=this.datepipe.transform(finalresult.result.updatedDate, 'dd-MM-yyyy')
			  
			  this.price=finalresult.result.price
			  this.offerprice=finalresult.result.offerPrice
			}
		})
	  }

    detailsImageSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
        items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}
