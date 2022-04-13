import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
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
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    var id = this.approute.snapshot.params['id'];
    this.Edit(id);
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
  Delete(){
    debugger;
  }

}
