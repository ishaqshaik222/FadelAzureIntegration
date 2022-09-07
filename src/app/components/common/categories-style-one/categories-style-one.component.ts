import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../../auth.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';

export class FinalData{
	planId:any
	planName:any
	length:any
	Price:any
	model:plans[];
}


export class plans{
	planid:any
	planname:any
	CourseId:any
	Price:any
} 


@Component({
  selector: 'app-categories-style-one',
  templateUrl: './categories-style-one.component.html',
  styleUrls: ['./categories-style-one.component.scss']
})
export class CategoriesStyleOneComponent implements OnInit {
	plans: any;
	ListData: Array<plans>=[];
	finaltabledata: Array<FinalData>=[];
    constructor(private _authService: AuthService,   
		 private _router: Router,
		 private approute: ActivatedRoute,
		 @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
		 private authService: MsalService,
		 private msalBroadcastService: MsalBroadcastService

		) { }

    ngOnInit(): void {
		this._authService.GetCoursePlans().subscribe((finalresult: any) => {
			debugger
			this.plans=finalresult.result;
			var ids = this.plans.map(item => item.planId)
        	.filter((value, index, self) => self.indexOf(value) === index);
			
			for(let i=0;i<ids.length;i++)
            {
              const tabledata=new FinalData();

              for(let j=0;j<this.plans.length;j++){
                
                const excel=new plans();
                  if(this.plans[j].planId==ids[i] ){
					  excel.planid=this.plans[j].planId;
					  excel.planname=this.plans[j].planName
                    excel.CourseId=this.plans[j].courseId;
					excel.Price=this.plans[j].price
                    this.ListData.push(excel);
                  }

              }
			  tabledata.planId=this.ListData[0].planid;
              tabledata.planName=this.ListData[0].planname;
              tabledata.model=this.ListData;
			  tabledata.length=this.ListData.length
			  tabledata.Price=this.ListData[0].Price
              this.finaltabledata.push(tabledata)
              this.ListData=[];
            }

			
			debugger
		  })
    }

	AddToCart(id:any){
		debugger
		// localStorage.setItem('cartplanid',id);
		var val=localStorage.getItem('AzureUserId')
		if(val!='null'){
		var data={
		  UserId:localStorage.getItem('AzureUserId'),
		  ProductId:parseInt(id),
		  CreatedBy:1,
		  Type:'CoursePlan'
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


	GoToPage(id:any){
		debugger
		this._router.navigate(['/courses-2-columns-style-1/',id]);
	}

    categoriesSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		items: 4,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 4
			},
			1200: {
				items: 4
			}
		}
    }

}