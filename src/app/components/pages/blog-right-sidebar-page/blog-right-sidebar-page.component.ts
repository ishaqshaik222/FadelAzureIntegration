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
    // localStorage.setItem('courseidfornavigate',id);
    window.location.href='http://localhost:4200/app/vien/start/'+id
    // this._router.navigateByUrl(this._authService.baseUrl+'app/vien/start',);
  }
  OnClick(id:any){
    debugger
    this._router.navigate(['/single-courses/'+id]);
}

}
