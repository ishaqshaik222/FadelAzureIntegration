import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';

export class CartItems {
  cartId: any
  courseId: any
  imageURL: any
  coursename: any
  price: any
  Tax: any
  TotalPrice: any
  IsPlan:any
}

export class Items {
  ItemId: any
  Quantity: any
  Price: any
  Tax: any
  Amount: any
  IsPlan:any
}

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  courses: any;
  carttable: any = [];
  TotalPrice: any = 0;
  Tax: any = 0;
  Total: any = 0;
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
  public payuform: any = {};
  disablePaymentButton: boolean = true;
  isplan: boolean=false;
  invoiceno: any;
  seqno: any;
  invoiceformatid: any;
  constructor(
    private _authService: AuthService,
    private _activatedroute: ActivatedRoute,
    private http: HttpClient,
    private _router: Router,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) { }

  ngOnInit(): void {
    debugger
    var Id = this._activatedroute.snapshot.params['id']
    var Value = this._activatedroute.snapshot.params['value']
    var Type = this._activatedroute.snapshot.params['type']
    if (Value == "ProductItem") {
      if (Type == "Plan") {
        this.isplan=true
        this.GetCoursesPlanById(Id,this.isplan);
      }
      if (Type == "Course") {
        this.isplan=false
        this.GetCourseById(Id,this.isplan)
        
      }
    }
    else if (Value == "cartitems") {
      this.CartItems(Id);
    }
    this.GetInvoiceNo();
  }

 

  confirmPayment() {
    debugger
    var val = localStorage.getItem('AzureUserId')
    if(val!='null'){
    var baseUrl = this._authService.baseUrl
    var model: any = []
    for (let i = 0; i < this.carttable.length; i++) {
      const Object = new Items();
      Object.ItemId = parseInt(this.carttable[i].courseId),
        Object.Price = this.carttable[i].price.toString(),
        Object.Tax = this.carttable[i].Tax.toString(),
        Object.Amount = this.carttable[i].TotalPrice.toString(),
        Object.Quantity = 1,
        Object.IsPlan=this.carttable[i].IsPlan
        model.push(Object);
    }

    var code = Math.floor(100000 + Math.random() * 900000) + 1;
    var data = {
      IsPlan:this.isplan,
      Country: this.country,

      // FirstName:this.firstname,
      FirstName: this.payuform.firstname,
      LastName: this.lastname,
      CompanyName: this.companyname,
      Address: this.address,
      City: this.city,
      State: this.state,
      Pincode: this.pincode,
      Email: this.payuform.email,
      CustomerId:localStorage.getItem('AzureUserId'),
      MobileNo: this.payuform.phone.toString(),
      TotalAmount: this.Total.toString(),
      TotalTax: this.Tax.toString(),
      InvoiceNo: this.invoiceno,
      SeqNo:this.seqno,
      InvoiceNoFormatId:this.invoiceformatid,
      CartItems: model,
      key: "oZ7oo9",
      txnid: this.invoiceno,
      txtprodinfo: "vmvsphere",
      surl: "https://testugetitapi.fadelsoft.com/api/Payment/Index",
      furl: "https://testugetitapi.fadelsoft.com/api/Payment/Index"
    }
    const formData: FormData = new FormData();
    formData.append("key", "oZ7oo9")
    formData.append("txnid", "TXN-" + code.toString())
    formData.append("txtprodinfo", "vmvsphere")
    formData.append("txtamount", "10")
    formData.append("txtfirstname", this.payuform.firstname)
    formData.append("txtemail", this.payuform.email)
    formData.append("txtphone", this.payuform.phone)
    formData.append("surl", "https://testugetitapi.fadelsoft.com/api/Payment/Index")
    formData.append("furl", "https://testugetitapi.fadelsoft.com/api/Payment/Index")
    // // formData.append("hash", "449d6f65e6beb2cfc497d62804fd63bcad8c5ad058eb60a3973f3f00f4a70464a0cf5a11e1a14b16c48ad75868f688d0ba349b04733947e647659a7833a16f0d")

    return this.http.post<any>(baseUrl + "api/Payment/Demo", data).subscribe(
      data => {
        console.log(data);
        debugger

        this.payuform.txnid = data.txnid;
        this.payuform.surl = data.surl;
        this.payuform.furl = data.furl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.payuform.email = data.email;
        this.payuform.firstname = data.firstname;
        this.payuform.phone = data.phone;
        this.payuform.productinfo = data.productinfo;
        this.payuform.amount = data.amount;

        this.disablePaymentButton = false;


      }, error1 => {
        console.log(error1);
      })
    }
    else if(val=='null'){
      
      let myCompOneObj = new HeaderStyleTwoComponent(
        this._activatedroute, this._authService, this._router, this.msalGuardConfig, this.authService, this.msalBroadcastService
      );

      myCompOneObj.login();
    }
  }

  GetInvoiceNo(){
    this._authService.GetInvoiceNo().subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      this.invoiceno=finalresult.result.invoiceNo
      this.seqno=finalresult.result.seqNo
      this.invoiceformatid=finalresult.result.invoiceNoFormatId
    });
  }


  
  CartItems(id: any) {
    debugger
    // var userid=1
    this._authService.GetCartItems(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      // var finalresult=JSON.parse(finalresult)
      this.courses = finalresult.result
      localStorage.setItem('cartlength', this.courses.length)
      for (let i = 0; i < this.courses.length; i++) {
        const obj = new CartItems()
        if (this.courses[i].offerPrice != 0) {
          obj.Tax = ((this.courses[i].offerPrice) * (this.courses[i].taxPercent)) / 100
        }
        else {
          obj.Tax = ((this.courses[i].price) * (this.courses[i].taxPercent)) / 100
        }


        obj.cartId = this.courses[i].cartId,
          obj.courseId = this.courses[i].courseId,
          obj.coursename = this.courses[i].courseName,
          obj.imageURL = this.courses[i].imageURL,
          obj.price = this.courses[i].price
        if (this.courses[i].offerPrice != 0) {
          obj.price = this.courses[i].offerPrice

        }
        obj.TotalPrice = obj.price + obj.Tax

        this.carttable.push(obj)
        this.TotalPrice = this.TotalPrice + obj.price
        this.Tax = this.Tax + obj.Tax
      }
      this.Total = this.TotalPrice + this.Tax

      // for(let i=0;i<this.storedNames.length;i++){
      //   this.courses.forEach(element => {

      //   });
      // }
      // this.cartcourses = this.courses.filter(item => this.storedValues.indexOf(item.id) === 1);
    });

  }

  PayNow() {
    debugger
    
    var code = Math.floor(100000 + Math.random() * 900000) + 1;
    var model: any = []
    for (let i = 0; i < this.carttable.length; i++) {
      const Object = new Items();
      Object.ItemId = parseInt(this.carttable[i].courseId),
        Object.Price = this.carttable[i].price.toString(),
        Object.Tax = this.carttable[i].Tax.toString(),
        Object.Amount = this.carttable[i].TotalPrice.toString(),
        Object.Quantity = 1,
        model.push(Object);
    }

    var data = {
      Country: this.payuform.country,
      FirstName: this.payuform.firstname,
      LastName: this.payuform.lastname,
      CompanyName: this.payuform.companyname,
      Address: this.payuform.address,
      City: this.payuform.city,
      State: this.payuform.state,
      Pincode: this.payuform.pincode,
      Email: this.payuform.email,
      MobileNo: this.payuform.phone,
      TotalAmount: this.Total.toString(),
      TotalTax: this.Tax.toString(),
      InvoiceNo: code.toString(),
      CartItems: model
    }
    var transactionId = "TXN-" + code.toString()

    const formData: FormData = new FormData();
    formData.append("key", "oZ7oo9")
    formData.append("txnid", "TXN-10003")
    formData.append("txtprodinfo", "vmvsphere")
    formData.append("txtamount", "10")
    formData.append("txtfirstname", "adnan")
    formData.append("txtemail", "gmdadnan@gmail.com")
    formData.append("txtphone", "8919238572")
    formData.append("surl", "https://testugetitapi.fadelsoft.com/api/Payment/Index")
    formData.append("furl", "https://testugetitapi.fadelsoft.com/api/Payment/Index")
    formData.append("hash", "449d6f65e6beb2cfc497d62804fd63bcad8c5ad058eb60a3973f3f00f4a70464a0cf5a11e1a14b16c48ad75868f688d0ba349b04733947e647659a7833a16f0d")

    // var data1={
    //   key:"oZ7oo9",
    //   txnid:transactionId,
    //   productinfo:this.carttable[0].coursename,
    //   amount:"10",
    //   firstname:this.firstname,
    //   email:this.email,
    //   phone:this.mobileno,
    //   surl:"https://ugetitmain.fadelsoft.com/",
    //   furl:"https://ugetitmain.fadelsoft.com/",
    //   // hash:"sha512(oZ7oo9| transactionId|10|Java|Test|gmdadnan@gmail.com|||||||||||UkojH5TS)"
    // }

    this._authService.PayUGateway(formData).subscribe((finalresult: any) => {
      debugger
      if (finalresult.status == "200") {
        window.location.href = finalresult.result
      }
    })
  }

  GetCoursesPlanById(id: any,isplan:any) {
    debugger
    this._authService.GetCoursePlanById(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult);
      // var finalresult=JSON.parse(finalresult)
      var plan = finalresult.result

      const obj = new CartItems()
      if (plan.offerPrice != 0) {
        obj.Tax = 0;
        // obj.Tax=((plan.offerPrice)*(plan.taxPercent))/100
      }
      else {
        obj.Tax = 0;
        // obj.Tax= ((plan.price)*(plan.taxPercent))/100
      }

      obj.courseId = plan.planId,
        obj.coursename = plan.planName,
        obj.price = plan.price
      if (plan.offerPrice != 0) {
        obj.price = plan.offerPrice

      }
      obj.TotalPrice = obj.price + obj.Tax
      obj.IsPlan=isplan
      this.carttable.push(obj)
      this.TotalPrice = this.TotalPrice + obj.price
      this.Tax = this.Tax + obj.Tax

      this.Total = this.TotalPrice + this.Tax

      // for(let i=0;i<this.storedNames.length;i++){
      //   this.courses.forEach(element => {

      //   });
      // }
      // this.cartcourses = this.courses.filter(item => this.storedValues.indexOf(item.id) === 1);
    });
  }

  GetCourseById(id: any,plan:any) {
    debugger
    this._authService.GetcourseById(id).subscribe((finalresult: any) => {
      debugger
      console.log(finalresult.result);
      // var finalresult=JSON.parse(finalresult)
      var course = finalresult.result
      const obj = new CartItems()
      if (course.offerPrice != 0) {
        obj.Tax = ((course.offerPrice) * (course.taxPercent)) / 100
      }
      else {
        obj.Tax = ((course.price) * (course.taxPercent)) / 100
      }


      obj.cartId = course.cartId,
        obj.courseId = course.courseId,
        obj.coursename = course.courseName,
        obj.imageURL = course.imageURL,
        obj.price = course.price
      if (course.offerPrice != 0) {
        obj.price = course.offerPrice

      }
      obj.TotalPrice = obj.price + obj.Tax
      obj.IsPlan=plan
      this.carttable.push(obj)
      this.TotalPrice = this.TotalPrice + obj.price
      this.Tax = this.Tax + obj.Tax

      this.Total = this.TotalPrice + this.Tax

      // for(let i=0;i<this.storedNames.length;i++){
      //   this.courses.forEach(element => {

      //   });
      // }
      // this.cartcourses = this.courses.filter(item => this.storedValues.indexOf(item.id) === 1);

    })

  }

}
