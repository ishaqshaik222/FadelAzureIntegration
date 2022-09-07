import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  myorders: any;

  constructor(private approute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    var userid=localStorage.getItem('AzureUserId')
    this.GetMyOrders(userid);
  }

  GetMyOrders(id:any){
    debugger
    this._authService.GetMyOrders(id).subscribe((finalresult: any) => {
      debugger
      this.myorders=finalresult.result;

    });
  }

  GoTo(Id:any){
    this._router.navigate(['/receipts/'+Id]);
  }

}
