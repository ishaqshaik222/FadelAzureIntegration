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
  userId: string;

  constructor(
    private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router:Router,

  ) { 
    
  }

  ngOnInit(): void {
    debugger
    this.userId=localStorage.getItem('AzureUserId')
    // var id = this.approute.snapshot.params['id'];
    var id =localStorage.getItem("cartcourseid")

    this.CartItems();
  }

  GoToCheckOutPage(){
    debugger
    this._router.navigate(['/checkout/',this.userId,'cartitems','cart']);
  }
  
  CartItems(){
    debugger
    var baseurl = this._authService.baseUrl;
    if (baseurl == "https://localhost:44358/") {
      baseurl = "https://localhost:44358"
    }
    if (baseurl == "http://testugetitapi.fadelsoft.com/") {
      baseurl = "http://testugetitapi.fadelsoft.com"
    }
    var userid=localStorage.getItem('AzureUserId')
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
    //return this.courses.length
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
