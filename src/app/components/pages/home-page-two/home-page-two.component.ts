import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.scss']
})
export class HomePageTwoComponent implements OnInit {
  loginDisplay = false;
  displayedColumns: string[] = ['claim', 'value'];
  dataSource: any =[];

  private readonly _destroying$ = new Subject<void>();
  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) { }

  ngOnInit(): void {
    debugger
    this.msalBroadcastService.msalSubject$
    .pipe(
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      takeUntil(this._destroying$)
    )
    .subscribe((result: EventMessage) => {
      console.log(result);
      const payload = result.payload as AuthenticationResult;
      this.authService.instance.setActiveAccount(payload.account);
    });

    this.msalBroadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None)
    )
    .subscribe(() => {
      debugger
      this.setLoginDisplay();
      this.checkAndSetActiveAccount();
      this.getClaims(this.authService.instance.getActiveAccount()?.idTokenClaims)
    });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  getClaims(claims: any) {
    debugger
    this.dataSource = [
      {id: 1, claim: "Display Name", value: claims ? claims['name'] : null},
      {id: 2, claim: "Object ID", value: claims ? claims['oid']: null},
      {id: 3, claim: "Job Title", value: claims ? claims['jobTitle']: null},
      {id: 4, claim: "City", value: claims ? claims['city']: null},
      // {id: 4, claim: "family_name", value: claims ? claims['family_name']: null},
      // {id: 4, claim: "City", value: claims ? claims['city']: null},

      //{id: 4, claim: "Identity Provider Access Token", value: claims ? claims['identityProviderAccessToken']: null},

    ];
    for(let i=0;i<this.dataSource.length;i++){
      if(this.dataSource[i].claim=="Object ID"){
        localStorage.setItem('AzureUserId',this.dataSource[i].value)
      }
      if(this.dataSource[i].claim=="Display Name"){
        console.log('UserName',this.dataSource[i].value )
        localStorage.setItem('UserName',this.dataSource[i].value)
      }
      
    }

  }



}
