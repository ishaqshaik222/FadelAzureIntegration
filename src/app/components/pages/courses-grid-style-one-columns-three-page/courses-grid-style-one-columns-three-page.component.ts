import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-courses-grid-style-one-columns-three-page',
  templateUrl: './courses-grid-style-one-columns-three-page.component.html',
  styleUrls: ['./courses-grid-style-one-columns-three-page.component.scss']
})
export class CoursesGridStyleOneColumnsThreePageComponent implements OnInit {
  courses: any;
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.GetAllCourses();
  }

  GetAllCourses(){
    debugger
    this._authService.GetCoursesForMenu().subscribe((finalresult: any) => {
      debugger
       var finalresult = JSON.parse(finalresult);
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
