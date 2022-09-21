import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  InvoiceId:any
  date:any
  receiptdata:any

  constructor(private approute: ActivatedRoute,
    private _authService: AuthService,
    private datepipe: DatePipe,
    private _router: Router,) { }

  ngOnInit(): void {
    var Id=localStorage.getItem('AzureUserId');
    var invoiceId=this.approute.snapshot.params['Invoiceno']
    var val=atob(invoiceId)
    this.GetDetails(Id,val);
  }

  GetDetails(id:any,invoiceno:any){
  
    this._authService.GetReceiptData(id,invoiceno).subscribe((finalresult: any) => {
      debugger
      //  this.values=[]
      this.receiptdata=finalresult.result;
      this.InvoiceId=this.receiptdata[0].invoiceNo
      this.date=this.receiptdata[0].invoiceDate

      });
   
  }

}
