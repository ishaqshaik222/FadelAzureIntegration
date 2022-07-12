import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

export class CartItems{
cartId:any
courseId:any
imageURL:any
coursename:any
price:any
Tax:any
TotalPrice:any
IsPlan:any
}

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
  Tax: any=0;
  TotalPrice: any=0;
  Total: any=0;
  courses: any;
  storedNames: any;
  cartcourses: any;
  storedValues: any=[];
  carttable: any=[];

  constructor(
    private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router:Router,

  ) { 
    
  }

  ngOnInit(): void {
    debugger
    // var id = this.approute.snapshot.params['id'];
    var id =localStorage.getItem("cartcourseid")
    // localStorage.setItem(i,1);

    // var courseids = [];
    // const values=new CartIds();
    // values.Courseid=id
    // values.UserId=localStorage.getItem("UserId");
    // courseids.push(values)

    //  localStorage.setItem("CartValues", JSON.stringify(this.storedValues));

    // courseids[0] = prompt("New member name?");
    //     localStorage.setItem("names", JSON.stringify(courseids));

    //  this.storedValues = JSON.parse(localStorage.getItem("cartcourseid"));

    //  this.storedValues = JSON.parse(localStorage.getItem("CartValues"));
    //  this.storedValues.push(values);

    // this.Edit(id);
    this.CartItems();
  }
  
  // Edit(id: any) {
  //   debugger
  //   var baseurl = this._authService.baseUrl;
  //   if (baseurl == "https://localhost:44358/") {
  //     baseurl = "https://localhost:44358"
  //   }
  //   if (baseurl == "http://testugetitapi.fadelsoft.com/") {
  //     baseurl = "http://testugetitapi.fadelsoft.com"
  //   }
  //   this._authService.GetcourseById(id).subscribe((finalresult: any) => {
  //     debugger
  //     console.log(finalresult);
     
  //     //  var finalresult = JSON.parse(result);
  //     // rolebyid=finalresult;
  //     if (finalresult.status == "200") {
  //       debugger
  //       if(finalresult.result.offerPrice!=0){
  //         this.Tax=((finalresult.result.offerPrice)*(finalresult.result.taxPercent))/100
  //       }
  //       else{
  //         this.Tax= ((finalresult.result.price)*(finalresult.result.taxPercent))/100
  //       }
  //       this.courseId=finalresult.result.courseId
  //       this.courseName=finalresult.result.courseName
  //       this.description=(finalresult.result.description.replace(/<[^>]*>/g, ''))
  //       this.fullDescription=(finalresult.result.fullDescription.toString())
  //       this.requirements=(finalresult.result.requirements.toString())
  //       // this.whatLearn=(finalresult.result.whatLearn.replace(/<[^>]*>/g, ''))
  //       this.whatLearn=(finalresult.result.whatLearn).toString();
  //       this.technologyName=finalresult.result.technologyName;
  //       // this.updatedDate=finalresult.result.updatedDate;
  //       this.updatedDate=this.datepipe.transform(finalresult.result.updatedDate, 'dd-MM-yyyy')
  //       this.price=finalresult.result.price
  //       this.offerprice=finalresult.result.offerPrice
  //       if(this.offerprice!=0){
  //         this.price=this.offerprice

  //       }
  //       this.TotalPrice=this.price+this.Tax
  //       this.Total=this.Total+this.TotalPrice
  //       if (finalresult.result.imageURL != null) {
  //         this.ImageURL = baseurl + finalresult.result.imageURL;
  //         // this.noimage=true;

  //       }
  //       else {
  //         // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";

  //       }

  //       // if (finalresult.result.isActive == true) {
  //       //     var check = document.getElementById("userchkactive") as HTMLInputElement;
  //       //     check.checked = true;
  //       // }
  //       // else {
  //       //     var check = document.getElementById("userchkactive") as HTMLInputElement;
  //       //     check.checked = false;
  //       // }
  //       //  this.spinner.hide();
  //     }
  //     else {

  //     }
  //   });
  // }
  CartItems(){
    debugger
    var baseurl = this._authService.baseUrl;
    if (baseurl == "https://localhost:44358/") {
      baseurl = "https://localhost:44358"
    }
    if (baseurl == "http://testugetitapi.fadelsoft.com/") {
      baseurl = "http://testugetitapi.fadelsoft.com"
    }
    var userid=1
    this._authService.GetCartItems(userid).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      // var finalresult=JSON.parse(finalresult)
      this.courses=finalresult.result
      localStorage.setItem('cartlength',this.courses.length)
      for(let i=0;i<this.courses.length;i++){
        const obj=new CartItems()
        if(this.courses[i].offerPrice!=0){
          obj.Tax=((this.courses[i].offerPrice)*(this.courses[i].taxPercent))/100
        }
        else{
          obj.Tax= ((this.courses[i].price)*(this.courses[i].taxPercent))/100
        }

                if (this.courses[i].imageURL != null) {
                  obj.imageURL = baseurl +this.courses[i].imageURL;
                  // this.noimage=true;
        
                }
                else {
                  // this.ImageURL = baseurl + "/courseFiles/dummy identityproof.png";
        
                }

        obj.cartId=this.courses[i].cartId,
        obj.courseId=this.courses[i].courseId,
        obj.coursename=this.courses[i].courseName,
        obj.IsPlan=this.courses[i].isPlan
        // obj.imageURL=this.courses[i].imageURL,
        obj.price=this.courses[i].price
        if(this.courses[i].offerPrice!=0){
          obj.price=this.courses[i].offerPrice

        }
        obj.TotalPrice=obj.price+obj.Tax

        this.carttable.push(obj)
        this.TotalPrice=this.TotalPrice+obj.price
        this.Tax=this.Tax+obj.Tax
      }
      this.Total=this.TotalPrice+this.Tax

      // for(let i=0;i<this.storedNames.length;i++){
      //   this.courses.forEach(element => {
          
      //   });
      // }
      // this.cartcourses = this.courses.filter(item => this.storedValues.indexOf(item.id) === 1);
    });

  }

  GoToPage(id,isplan){
    debugger
    if(isplan==true){
      this._router.navigate(['/courses-2-columns-style-1/',id]);
    }
    if(isplan==false){
      this._router.navigate(['/single-courses/',id]);
    }
    // this._router.navigate[('/single-products/{{item.courseId}}/Course')]
  }

    Delete(id:any){
              debugger;

                var data={
                  CartId:parseInt(id),
                }
      
              this._authService.DeleteCartItem(data).subscribe((finalresult: any) => {
                debugger
                if(finalresult.status="200"){
                  
                  window.location.reload()
                }
                
              })
          
    }

}
