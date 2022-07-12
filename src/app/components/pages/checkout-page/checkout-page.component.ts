import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

export class CartItems{
  cartId:any
  courseId:any
  imageURL:any
  coursename:any
  price:any
  Tax:any
  TotalPrice:any
  }

  export class Items{
    ItemId:any
    Quantity:any
    Price:any
    Tax:any
    Amount:any

    }
  
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  courses: any;
  carttable: any=[];
  TotalPrice: any=0;
  Tax: any=0;
  Total: any=0;
  country: any;
  firstname: any;
  lastname: any;
  companyname: any;
  address: any;
  city: any;
  state: any;
  pincode: any;
  email: any;
  mobileno: any;

  constructor(
    private _authService: AuthService,
    private _activatedroute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    debugger
    var Id= this._activatedroute.snapshot.params['id']
    var Value=this._activatedroute.snapshot.params['value']
    var Type=this._activatedroute.snapshot.params['type']
    if(Value=="ProductItem"){
      if(Type=="Plan"){
        this.GetCoursesPlanById(Id);
      }
      if(Type=="Course"){
        this.GetCourseById(Id)
      }
    }
    else if(Value=="cartitems"){
      this.CartItems(Id);
    }
    else{

    }
  }

  CartItems(id:any){
    debugger
    // var userid=1
    this._authService.GetCartItems(id).subscribe((finalresult: any) => {
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

     
        obj.cartId=this.courses[i].cartId,
        obj.courseId=this.courses[i].courseId,
        obj.coursename=this.courses[i].courseName,
        obj.imageURL=this.courses[i].imageURL,
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

  PayNow(){
    debugger
     var code = Math.floor(100000 + Math.random() * 900000) + 1;

    var model:any=[]
    for(let i=0;i<this.carttable.length;i++){
      const Object = new Items();
      Object.ItemId=parseInt(this.carttable[i].courseId),
      Object.Price=this.carttable[i].price.toString(),
      Object.Tax=this.carttable[i].Tax.toString(),
      Object.Amount=this.carttable[i].TotalPrice.toString(),
      Object.Quantity=1,
      model.push(Object);
    } 

    var data={
      Country:this.country,
      FirstName:this.firstname,
      LastName:this.lastname,
      CompanyName:this.companyname,
      Address:this.address,
      City:this.city,
      State:this.state,
      Pincode:this.pincode,
      Email:this.email,
      MobileNo:this.mobileno,
      TotalAmount:this.Total.toString(),
      TotalTax:this.Tax.toString(),
      InvoiceNo:code.toString(),
      CartItems:model
    }

    this._authService.PayNow(data).subscribe((finalresult: any) => {
      debugger
      if(finalresult.status=="200"){
        window.location.href=finalresult.result
      }
    })
  }

  GetCoursesPlanById(id:any){
    debugger
    this._authService.GetCoursePlanById(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      // var finalresult=JSON.parse(finalresult)
      var plan=finalresult.result

        const obj=new CartItems()
        if(plan.offerPrice!=0){
          obj.Tax=0;
          // obj.Tax=((plan.offerPrice)*(plan.taxPercent))/100
        }
        else{
          obj.Tax=0;
          // obj.Tax= ((plan.price)*(plan.taxPercent))/100
        }

        obj.courseId=plan.courseId,
        obj.coursename=plan.planName,
        obj.price=plan.price
        if(plan.offerPrice!=0){
          obj.price=plan.offerPrice

        }
        obj.TotalPrice=obj.price+obj.Tax

        this.carttable.push(obj)
        this.TotalPrice=this.TotalPrice+obj.price
        this.Tax=this.Tax+obj.Tax
      
      this.Total=this.TotalPrice+this.Tax

      // for(let i=0;i<this.storedNames.length;i++){
      //   this.courses.forEach(element => {
          
      //   });
      // }
      // this.cartcourses = this.courses.filter(item => this.storedValues.indexOf(item.id) === 1);
    });
  }

  GetCourseById(id:any){
    debugger
  this._authService.GetcourseById(id).subscribe((finalresult: any) => {
      debugger
        console.log(finalresult.result);
        // var finalresult=JSON.parse(finalresult)
        var course=finalresult.result
          const obj=new CartItems()
          if(course.offerPrice!=0){
            obj.Tax=((course.offerPrice)*(course.taxPercent))/100
          }
          else{
            obj.Tax= ((course.price)*(course.taxPercent))/100
          }
  
       
          obj.cartId=course.cartId,
          obj.courseId=course.courseId,
          obj.coursename=course.courseName,
          obj.imageURL=course.imageURL,
          obj.price=course.price
          if(course.offerPrice!=0){
            obj.price=course.offerPrice
  
          }
          obj.TotalPrice=obj.price+obj.Tax
  
          this.carttable.push(obj)
          this.TotalPrice=this.TotalPrice+obj.price
          this.Tax=this.Tax+obj.Tax
        
        this.Total=this.TotalPrice+this.Tax
  
        // for(let i=0;i<this.storedNames.length;i++){
        //   this.courses.forEach(element => {
            
        //   });
        // }
        // this.cartcourses = this.courses.filter(item => this.storedValues.indexOf(item.id) === 1);
      
  })

  }

}
