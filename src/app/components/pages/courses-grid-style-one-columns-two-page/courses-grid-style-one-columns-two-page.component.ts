import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-courses-grid-style-one-columns-two-page',
  templateUrl: './courses-grid-style-one-columns-two-page.component.html',
  styleUrls: ['./courses-grid-style-one-columns-two-page.component.scss']
})
export class CoursesGridStyleOneColumnsTwoPageComponent implements OnInit {
  courses: any;
  PlanId: number;

  constructor(private activatedRoute: ActivatedRoute,
    private _authService: AuthService,    
    private _router: Router

    ) { }

  ngOnInit(): void {
    debugger
     this.PlanId = parseInt(this.activatedRoute.snapshot.params['planid']);

    this.GetCoursesPlanId(this.PlanId);
  }

  GetCoursesPlanId(id:any){
  this._authService.GetCoursesPlanId(id).subscribe((finalresult: any) => {
    debugger
    this.courses=finalresult.result
  })
}

BuyNow(id:any){
  debugger
  localStorage.setItem('cartplanid',id);
  var data={
    UserId:1,
    ProductId:parseInt(id),
    CreatedBy:1
  }
  this._authService.AddCartItem(data).subscribe((finalresult: any) => {
    debugger
    var finalresult=JSON.parse(finalresult)
    if(finalresult.status=="200"){
      this._router.navigate(['/cart']);
    }
    else if(finalresult.status=="104"){
      this._router.navigate(['/cart']);
    }
    else{
      
    }
  })

}


AddToCart(id:any){
  debugger
  // localStorage.setItem('cartplanid',id);
  var data={
    UserId:1,
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

}
