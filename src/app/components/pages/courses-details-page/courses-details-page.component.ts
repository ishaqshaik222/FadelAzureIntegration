import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AccordionGroup } from "ngx-accordion";

export class tableData{
  moduleName:any;
  moduleId:any;
  OrderId:any;
  ModuleShortDescription:any;
  ChapterShortDescription:any;
   model:coursecontent[];
}

export class coursecontent{
  chapter:any;
  author:any
  uploaded:any;
  uploadedFileName:any;
  videoUrl:any;
  videoFileName:any;
  moduleName:any;
  moduleId:any;
  OrderId:any;
  ModuleShortDescription:any;
  ChapterShortDescription:any;
}

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {

  ListData: Array<coursecontent>=[];
    finaltabledata: Array<tableData>=[];
    OrderedData: Array<tableData>=[];

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
  ImageUrl: string;
  modules: any;
  questions: any;

  constructor(
    private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router: Router,

  ) {
    // debugger
   }

  ngOnInit(): void {
    
    // var loginId = localStorage.getItem("LoginId");
    var id = this.approute.snapshot.params['id'];
    this.courseId=id
    this.Edit(id);
    this.getchapters(id);
    this.GetModuleByCourseID(id);
    this.GetFreqentlyAskedQuestion(id);
  }
  Edit(id: any) {
    
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
        localStorage.setItem("ImageUrl",finalresult.result.imageURL);

        this.courseId=finalresult.result.courseId
        this.courseName=finalresult.result.courseName
        this.description=(finalresult.result.description.replace(/<[^>]*>/g, ''))
        this.fullDescription=(finalresult.result.fullDescription.toString())
        this.requirements=(finalresult.result.requirements.toString())
        // this.whatLearn=(finalresult.result.whatLearn.replace(/<[^>]*>/g, ''))
        this.whatLearn=(finalresult.result.whatLearn).toString();
        this.technologyName=finalresult.result.technologyName;
        // this.updatedDate=finalresult.result.updatedDate;
        this.ImageUrl=baseurl+finalresult.result.imageURL
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
    this._authService.getchapters(id).subscribe((finalresult: any) => {
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

  GetModuleByCourseID(id: any,) {
    
    this._authService.GetModuleByCourseID(id).subscribe((finalresult: any) => {
      debugger
      // var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        this.modules=finalresult.result;
        var modulesids = this.modules.map(item => item.moduleId)
        .filter((value, index, self) => self.indexOf(value) === index);

       
      }

      for(let i=0;i<modulesids.length;i++)
            {
              const tabledata=new tableData();

              for(let j=0;j<this.modules.length;j++){
                
                const excel=new coursecontent();
                  if(this.modules[j].moduleId==modulesids[i] ){
                    excel.chapter=this.modules[j].chapter;
                    excel.author=this.modules[j].author;
                    excel.uploaded=this.modules[j].uploaded;
                    excel.uploadedFileName=this.modules[j].uploadedFileName;
                    excel.videoUrl=this.modules[j].videoUrl;
                    excel.videoFileName=this.modules[j].videoFileName;
                    excel.moduleName=this.modules[j].moduleName;
                    excel.moduleId=this.modules[j].moduleId;
                    excel.OrderId=this.modules[j].orderId;
                    excel.ModuleShortDescription=this.modules[j].shortDescription.replace(/<[^>]*>/g, '');
                    excel.ChapterShortDescription=this.modules[j].contentDescription.replace(/<[^>]*>/g, '')
                    this.ListData.push(excel);
                  }

              }
              tabledata.ModuleShortDescription=this.ListData[0].ModuleShortDescription.replace(/<[^>]*>/g, '');
              tabledata.ChapterShortDescription=this.ListData[0].ChapterShortDescription.replace(/<[^>]*>/g, '')
              tabledata.moduleName=this.ListData[0].moduleName;
              tabledata.moduleId=this.ListData[0].moduleId;
              tabledata.model=this.ListData;
              tabledata.OrderId=this.ListData[0].OrderId;
              this.finaltabledata.push(tabledata)
              this.ListData=[];
            }
            var length=Math.max.apply(Math, this.finaltabledata.map(function(o) { return o.OrderId; }));

            for(let i=0;i<length;i++){
              for(let j=0;j<this.finaltabledata.length;j++){
                if(this.finaltabledata[j].OrderId==(i+1)){
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
        for(let i=0;i<finalresult.result.length;i++){
          finalresult.result[i].answer=finalresult.result[i].answer.replace(/<[^>]*>/g, '')
        }
        
        this.questions=finalresult.result;
        

       
      }
    });
  }
  // Addcourse(){
  //   console.log (this.courseId)
  //   //routerLink="/cart/{{courseId}}"

  // }

}
