import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth.service';

@Component({
  selector: 'app-hometwo-courses',
  templateUrl: './hometwo-courses.component.html',
  styleUrls: ['./hometwo-courses.component.scss']
})
export class HometwoCoursesComponent implements OnInit {
  ImageURL: any;
  courses: any;
  techs: any;
  price: any;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.Getcourses()
    this.Gettechnologies();
  }
  Gettechnologies() {
    // var baseurl = this._authService.baseUrl;
    // if (baseurl == "https://localhost:44358/") {
    //   baseurl = "https://localhost:44358"
    // }
    // if (baseurl == "http://testugetitapi.fadelsoft.com/") {
    //   baseurl = "http://testugetitapi.fadelsoft.com"
    // }
    debugger
    this._authService.Gettechnologies().subscribe((finalresult: any) => {
      debugger
      var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        debugger
        console.log(finalresult.result)
        this.techs = finalresult.result;
        // for(let i = 0;i<this.courses.length;i++){
        //   if (finalresult.result[i].imageURL != null) {
        //     this.courses[i].ImageURL = baseurl + finalresult.result.imageURL;
        //     // this.noimage=true;;

        //   }
        //   else {
        //     // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";

        //   }

        // }
        setTimeout(() => {
        }, 1000);
      }
      else {
      }
      (error) => {

      }
    });
  }
  Getcourses() {
    var baseurl = this._authService.baseUrl;
    if (baseurl == "https://localhost:44358/") {
      baseurl = "https://localhost:44358"
    }
    if (baseurl == "http://testugetitapi.fadelsoft.com/") {
      baseurl = "http://testugetitapi.fadelsoft.com"
    }
    debugger
    this._authService.GetCourses().subscribe((finalresult: any) => {
      debugger
      // var finalresult = JSON.parse(finalresult);
      if (finalresult.status == "200") {
        debugger
        console.log(finalresult.result)
        this.courses = finalresult.result;
        for (let i = 0; i < this.courses.length; i++) {
          // this.courses[i].price = this.courses[i].price ;
          // this.offerprice = finalresult.result.offerPrice
          if (this.courses[i].offerPrice != 0) {
            this.courses[i].price = this.courses[i].offerPrice;
          }
          else{
            this.courses[i].price = this.courses[i].price;

          }
          // this.courses[i].ImageURL = baseurl + finalresult.result[i].imageURL;
          // if (finalresult.result[i].imageURL != null) {
          //   this.courses[i].ImageURL = baseurl + finalresult.result[i].imageURL;

          //   // this.noimage=true;;

          // }
          // else {
          //   // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";

          // }

        }
        // if (finalresult.result.imageURL != null) {
        //   this.ImageURL = baseurl + finalresult.result.imageURL;
        //   // this.noimage=true;;

        // }
        // else {
        //   // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";

        // }
        setTimeout(() => {
        }, 1000);
      }
      else {
      }
      (error) => {

      }
    });
  }

}
