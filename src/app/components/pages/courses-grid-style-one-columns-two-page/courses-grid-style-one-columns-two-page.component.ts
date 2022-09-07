import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';

@Component({
  selector: 'app-courses-grid-style-one-columns-two-page',
  templateUrl: './courses-grid-style-one-columns-two-page.component.html',
  styleUrls: ['./courses-grid-style-one-columns-two-page.component.scss']
})
export class CoursesGridStyleOneColumnsTwoPageComponent implements OnInit {
  courses: any;
  PlanId: number;
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(private activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService

  ) { }

  ngOnInit(): void {
    debugger
    this.PlanId = parseInt(this.activatedRoute.snapshot.params['planid']);

    this.GetCoursesPlanId(this.PlanId);
  }

  GetCoursesPlanId(id: any) {
    this._authService.GetCoursesPlanId(id).subscribe((finalresult: any) => {
      debugger
      this.courses = finalresult.result
    })
  }

  BuyNow(id: any) {
    debugger
    localStorage.setItem('cartplanid', id);
    var val = localStorage.getItem('AzureUserId')
    if (val != 'null') {
      var data = {
        UserId: val,
        ProductId: parseInt(id),
        CreatedBy: 1,
        Type: 'CoursePlan'

      }
      this._authService.AddCartItem(data).subscribe((finalresult: any) => {
        debugger
        var finalresult = JSON.parse(finalresult)
        if (finalresult.status == "200") {
          this._router.navigate(['/checkout/' + id + '/ProductItem/Plan']);
        }
        else if (finalresult.status == "104") {
          this._router.navigate(['/checkout/' + id + '/ProductItem/Plan']);
        }
        else {

        }
      })
    }
    else if (val == 'null') {

      let myCompOneObj = new HeaderStyleTwoComponent(
        this.activatedRoute, this._authService, this._router, this.msalGuardConfig, this.authService, this.msalBroadcastService
      );

      myCompOneObj.login();
    }

  }


  AddToCart(id: any) {
    debugger
    // localStorage.setItem('cartplanid',id);
    var val = localStorage.getItem('AzureUserId')
    if (val != 'null') {
      var data = {
        UserId: localStorage.getItem('AzureUserId'),
        ProductId: parseInt(id),
        CreatedBy: 1,
        Type: 'CoursePlan'
      }
      this._authService.AddCartItem(data).subscribe((finalresult: any) => {
        debugger
        var finalresult = JSON.parse(finalresult)
        if (finalresult.status == "200") {
          window.location.reload();
          // this._router.navigate(['/cart']);
        }
        else if (finalresult.status == "104") {
          // this._router.navigate(['/cart']);
        }
        else {

        }
      })
    }
    else if (val == 'null') {

      let myCompOneObj = new HeaderStyleTwoComponent(
        this.activatedRoute, this._authService, this._router, this.msalGuardConfig, this.authService, this.msalBroadcastService
      );

      myCompOneObj.login();
    }
  }

}
