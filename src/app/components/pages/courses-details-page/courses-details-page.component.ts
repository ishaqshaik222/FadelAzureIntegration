import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {
  ImageURL: any;
  courseName: any;
  description: string;
  fullDescription: string;
  requirements: string;
  whatLearn: string;
  price: any;
  technologyName: any;
  updatedDate: any;
  courseId: any;
  offerprice: any;
  chapters: any;
  contentDescription: string;
  courseids: any=[];

  constructor(
    private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router: Router,

  ) { }

  ngOnInit(): void {
    // var loginId = localStorage.getItem("LoginId");
    var id = this.approute.snapshot.params['id'];
    this.courseId=id
    this.Edit(id);
    this.getchapters(id);
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
        
        this.price=finalresult.result.price;
        this.offerprice=finalresult.result.offerPrice
        if(this.offerprice!=0){
          this.price=this.offerprice
        }

        if (finalresult.result.imageURL != null) {
          this.ImageURL = baseurl + finalresult.result.imageURL;
          // this.noimage=true;;

        }
        else {
          // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";

        }
      }
      else {

      }
    });
  }

  BuyNow(id:any){
    debugger
    this.courseids=id
    localStorage.setItem('cartcourseid',this.courseids);
    var data={
      UserId:1,
      ProductId:parseInt(this.courseids),
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

  getchapters(id: any,) {
    debugger
    this._authService.getchapters(id).subscribe((finalresult: any) => {
      debugger
      // var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        console.log('chapters',finalresult.result)
        this.chapters=finalresult.result;
        for(let i=0 ; i< this.chapters.length; i++){
          this.chapters[i].contentDescription =this.chapters[i].contentDescription.replace(/<[^>]*>/g, '')
        }
      }
      else {

      }
    });
  }
  // Addcourse(){
  //   console.log (this.courseId)
  //   //routerLink="/cart/{{courseId}}"

  // }

}
