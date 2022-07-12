import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-blog-right-sidebar-page',
  templateUrl: './blog-right-sidebar-page.component.html',
  styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent implements OnInit {
  data: any;

  constructor(private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router: Router,) { }

  ngOnInit(): void {
     var id=2;
   //var id=1;
    this.GetDetails(id);
  }

  GetDetails(id:any){
    this._authService.GetSubscribedCoursesByCustomerId(id).subscribe((finalresult: any) => {
      debugger
      this.data=finalresult.result;
    });
  }
  GoToPage(id:any){
    debugger
    var baseurl=this._authService.baseUrl
    // localStorage.setItem('courseidfornavigate',id);
    if(baseurl=="https://localhost:44358/"){
    window.location.href='http://localhost:4300/#/app/'+id
    }
    else if(baseurl=="http://testugetitapi.fadelsoft.com/"){
      window.location.href='http://ugetitstudent.fadelsoft.com/#/app/'+id
    }
    else{

    }
    // this._router.navigateByUrl(this._authService.baseUrl+'app/vien/start',);
  }
  OnClick(id:any){
    debugger
    this._router.navigate(['/single-courses/'+id]);
}

}
