import { DatePipe, ViewportScroller } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AccordionGroup } from "ngx-accordion";
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { CartPageComponent } from '../cart-page/cart-page.component';

export class tableData {
  moduleName: any;
  moduleId: any;
  OrderId: any;
  ModuleShortDescription: any;
  ChapterShortDescription: any;
  model: coursecontent[];
}

export class coursecontent {
  chapter: any;
  author: any
  uploaded: any;
  uploadedFileName: any;
  videoUrl: any;
  videoFileName: any;
  moduleName: any;
  moduleId: any;
  OrderId: any;
  ModuleShortDescription: any;
  ChapterShortDescription: any;
}

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  ListData: Array<coursecontent> = [];
  finaltabledata: Array<tableData> = [];
  OrderedData: Array<tableData> = [];
  subscribed:boolean=false
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
  courseids: any = [];
  ImageUrl: string;
  modules: any;
  questions: any;
  ImageCaption: any;
  ImageTitle: any;
  ImageShortDescription: any;
  videoSource: any = [];
  finalquestions: Array<any> = [];
  relatedcourses: any;
  certifications: any;
  InstrcuctorName: any;
  InstructorImage: any;
  InstrcuctorShortDesc: any;
  InstrcuctorLongDesc: any;
  InstructorId: any;
  AverageRating: any;
  NoOfRatings: any;
  stars: number[] = [1, 2, 3, 4, 5];
  ratings: Array<any> = [];
  reviewsratiing: any;
  constructor(
    private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router: Router,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private scroller: ViewportScroller
  ) {
    debugger
  }

  ngOnInit(): void {
    var userid=localStorage.getItem('AzureUserId')
    var id = this.approute.snapshot.params['id'];
    this.courseId = id
    this.Edit(id);
    this.GetSubscribedCourses(userid);
    this.getchapters(id);
    this.GetModuleByCourseID(id);
    this.GetFreqentlyAskedQuestion(id);
    this.GetRelatedCourses(id)
    this.GetInstructorDetailsbasedOncourse(id);
    this.GetAllReviews(id);
  }

  GetAllReviews(id:any){
    debugger
    this._authService.GetRatingsByCourseId(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      this.reviewsratiing=finalresult.result;

    });
  }
  

  GetRelatedCourses(id:any){
    debugger
    this._authService.GetRelatedCourses(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      this.relatedcourses=finalresult.result;

    });
  }
  GoTOPage(id){
    this._router.navigate(['/single-courses/',id]);
        setTimeout(() => {
            window.location.reload();

        }, 1000);
  }

  goDown1() {
    debugger
    this.scroller.scrollToAnchor("about");
  }
  goDown2() {
    debugger
    this.scroller.scrollToAnchor("instructor");
  }goDown3() {
    debugger
    this.scroller.scrollToAnchor("syllabus");
  }goDown4() {
    debugger
    this.scroller.scrollToAnchor("reviews");
  }goDown5() {
    debugger
    this.scroller.scrollToAnchor("faq");
  }
  goDown6() {
    debugger
    this.scroller.scrollToAnchor("faq");
  }

  goDown8() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById("reviews").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goDown7() {
    this._router.navigate([], { fragment: "faq" });
  }

  GetSubscribedCourses(id:any){
    debugger
    this._authService.GetSubscribedCourses(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      finalresult.result.forEach(element => {
        if(element==this.courseId){
          this.subscribed=true
        }
      });   
    });

  }


  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  Edit(id: any) {

    var baseurl = this._authService.baseUrl;
    if (baseurl == "https://localhost:44358/") {
      baseurl = "https://localhost:44358"
    }
    if (baseurl == "https://testugetitapi.fadelsoft.com/") {
      baseurl = "https://testugetitapi.fadelsoft.com"
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
        localStorage.setItem("ImageUrl", finalresult.result.imageURL);

        this.courseId = finalresult.result.courseId
        this.courseName = finalresult.result.courseName
        this.description = (finalresult.result.description.replace(/<[^>]*>/g, ''))
        this.fullDescription = (finalresult.result.fullDescription.toString())
        this.requirements = (finalresult.result.requirements.toString())
        // this.whatLearn=(finalresult.result.whatLearn.replace(/<[^>]*>/g, ''))
        this.whatLearn = (finalresult.result.whatLearn).toString();
        this.certifications = (finalresult.result.certifications).toString();
        this.technologyName = finalresult.result.technologyName;
        // this.updatedDate=finalresult.result.updatedDate;
        this.ImageUrl = baseurl + finalresult.result.imageURL
        this.updatedDate = this.datepipe.transform(finalresult.result.updatedDate, 'dd-MM-yyyy')
        this.ImageCaption = finalresult.result.imageCaption
        this.ImageTitle = finalresult.result.imageTitle
        this.ImageShortDescription = finalresult.result.imageShortDescription == null ? null : finalresult.result.imageShortDescription.replace(/<[^>]*>/g, '')
        
        this.ratings.push(finalresult.result.average)
        
        this.NoOfRatings=finalresult.result.noOfRatings
        this.price = finalresult.result.price;
        this.offerprice = finalresult.result.offerPrice
        if (this.offerprice != 0) {
          this.price = this.offerprice
        }
        if (finalresult.result.imageURL != null) {
          this.ImageURL = finalresult.result.imageURL;
          // this.noimage=true;;
        }
        else {
          this.ImageURL = "assets/img/default/Image-1.jpg";

        }
        if (finalresult.result.videoUrl != null) {
          this.videoSource.push(finalresult.result.videoUrl);
          // this.noimage=true;;
        }
      }
      else {

      }
    });
  }

  GetInstructorDetailsbasedOncourse(id){
    debugger
    this._authService.GetInstructorDetailsbasedOncourse(id).subscribe((finalresult: any) => {
      if (finalresult.status == "200") {
        console.log('chapters', finalresult.result)
        this.InstrcuctorName = finalresult.result.displayName;
        this.InstructorImage = finalresult.result.imageUrl;
        this.InstrcuctorShortDesc = finalresult.result.shortDescription.replace(/<[^>]*>/g, '');
        this.InstrcuctorLongDesc = finalresult.result.longDescription.replace(/<[^>]*>/g, '');
        this.InstructorId=finalresult.result.facultyId
        localStorage.setItem('InstructorName',this.InstrcuctorName)
      }
    })
  }

  AddToCart(id: any) {
    debugger
    // localStorage.setItem('cartplanid',id);
    var val = localStorage.getItem('AzureUserId')
    if (val != 'null') {
      var data = {
        UserId: localStorage.getItem('AzureUserId'),
        ProductId: parseInt(id),
        CreatedBy: 1
        //   Type:'CoursePlan'
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
        this.approute, this._authService, this._router, this.msalGuardConfig, this.authService, this.msalBroadcastService
      );
      myCompOneObj.login();
    }
  }
  BuyNow(id: any) {
    debugger
    this.courseids = id
    localStorage.setItem('cartcourseid', this.courseids);
    var val = localStorage.getItem('AzureUserId')
    if (val != 'null') {
      var data = {
        UserId: val,
        ProductId: parseInt(this.courseids),
        CreatedBy: 1
      }
      this._authService.AddCartItem(data).subscribe((finalresult: any) => {
        debugger
        var finalresult = JSON.parse(finalresult)
        if (finalresult.status == "200") {
          this._router.navigate(['/checkout/' + id + '/ProductItem/Course']);
        }
        else if (finalresult.status == "104") {
          this._router.navigate(['/checkout/' + id + '/ProductItem/Course']);
        }
        else {

        }
      })
    }
    else if (val == 'null') {

      let myCompOneObj = new HeaderStyleTwoComponent(
        this.approute, this._authService, this._router, this.msalGuardConfig, this.authService, this.msalBroadcastService
      );

      myCompOneObj.login();
    }

  }

  GoToCourse(id:any){
    debugger
    var baseurl=this._authService.baseUrl
    var userid=localStorage.getItem('AzureUserId')
    var username=localStorage.getItem('UserName')
    // localStorage.setItem('courseidfornavigate',id);
    if(baseurl=="https://localhost:44358/"){
    window.location.href='http://localhost:4300/#/app/'+id+'/'+userid+'/'+username
    }
    else if(baseurl=="http://testugetitapi.fadelsoft.com/"){
      window.location.href='http://ugetitstudent.fadelsoft.com/#/app/'+id+'/'+userid+'/'+username
    }
    else if(baseurl=="https://testugetitapi.fadelsoft.com/"){
      window.location.href='https://ugetitstudent.fadelsoft.com/#/app/'+id+'/'+userid+'/'+username
    }
    // this._router.navigateByUrl(this._authService.baseUrl+'app/vien/start',);
  }

  getchapters(id: any,) {
    this._authService.getchapters(id).subscribe((finalresult: any) => {
      // var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        console.log('chapters', finalresult.result)
        this.chapters = finalresult.result;
        for (let i = 0; i < this.chapters.length; i++) {
          this.chapters[i].contentDescription = this.chapters[i].contentDescription.replace(/<[^>]*>/g, '')
        }
      }
      else {

      }
    });
  }

  GetModuleByCourseID(id: any,) {

    this._authService.GetModuleByCourseID(id).subscribe((finalresult: any) => {
      debugger
      // var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        this.modules = finalresult.result;
        var modulesids = this.modules.map(item => item.moduleId)
          .filter((value, index, self) => self.indexOf(value) === index);


      }

      for (let i = 0; i < modulesids.length; i++) {
        const tabledata = new tableData();

        for (let j = 0; j < this.modules.length; j++) {

          const excel = new coursecontent();
          if (this.modules[j].moduleId == modulesids[i]) {
            excel.chapter = this.modules[j].chapter;
            excel.author = this.modules[j].author;
            excel.uploaded = this.modules[j].uploaded;
            excel.uploadedFileName = this.modules[j].uploadedFileName;
            excel.videoUrl = this.modules[j].videoUrl;
            excel.videoFileName = this.modules[j].videoFileName;
            excel.moduleName = this.modules[j].moduleName;
            excel.moduleId = this.modules[j].moduleId;
            excel.OrderId = this.modules[j].orderId;
            excel.ModuleShortDescription = this.modules[j].shortDescription.replace(/<[^>]*>/g, '');
            excel.ChapterShortDescription = this.modules[j].contentDescription.replace(/<[^>]*>/g, '')
            this.ListData.push(excel);
          }

        }
        tabledata.ModuleShortDescription = this.ListData[0].ModuleShortDescription.replace(/<[^>]*>/g, '');
        tabledata.ChapterShortDescription = this.ListData[0].ChapterShortDescription.replace(/<[^>]*>/g, '')
        tabledata.moduleName = this.ListData[0].moduleName;
        tabledata.moduleId = this.ListData[0].moduleId;
        tabledata.model = this.ListData;
        tabledata.OrderId = this.ListData[0].OrderId;
        this.finaltabledata.push(tabledata)
        this.ListData = [];
      }
      var length = Math.max.apply(Math, this.finaltabledata.map(function (o) { return o.OrderId; }));

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < this.finaltabledata.length; j++) {
          if (this.finaltabledata[j].OrderId == (i + 1)) {
            this.OrderedData.push(this.finaltabledata[j]);
          }
        }
      }

    });
  }

  GetFreqentlyAskedQuestion(id: any,) {

    this._authService.GetQuestions(id).subscribe((finalresult: any) => {
      debugger
      // var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        for (let i = 0; i < finalresult.result.length; i++) {
          finalresult.result[i].answer = finalresult.result[i].answer.replace(/<[^>]*>/g, '')
        }

        this.questions = finalresult.result;

        for (let i = 0; i < this.questions.length; i++)
          for (let j = 0; j < this.questions.length; j++) {
            if (this.questions[j].orderId == (i + 1)) {
              this.finalquestions.push(this.questions[j]);
            }

          }


      }
    });
  }
  // Addcourse(){
  //   console.log (this.courseId)
  //   //routerLink="/cart/{{courseId}}"

  // }

}
