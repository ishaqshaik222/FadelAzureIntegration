import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../auth.service';

export class tableData{
    technologyName:any;
    technologyId:any;
     model:courses[];
  }
  export class courses{
    courseId:any;
    courseName:any
    technologyName:any;
    technologyId:any;

 }
@Component({
    selector: 'app-header-style-two',
    templateUrl: './header-style-two.component.html',
    styleUrls: ['./header-style-two.component.scss']
})
export class HeaderStyleTwoComponent implements OnInit {
    title = 'Microsoft identity platform';
    isIframe = false;
    loginDisplay = false;
    private readonly _destroying$ = new Subject<void>();

    id:string="";
    loggedIn:boolean=false
    cartlength: string;
    technologies: any;

    ListData: Array<courses>=[];
    finaltabledata: Array<tableData>=[];
    courseplans: any;
    mycourseslink: string;

    constructor(private route: ActivatedRoute,
        private _authService: AuthService,
        private _router: Router,
        
        @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
        private authService: MsalService,
        private msalBroadcastService: MsalBroadcastService,

        ) { }

    ngOnInit(): void {
        this.isIframe = window !== window.parent && !window.opener;
        var baseUrl=this._authService.baseUrl

          //this.cartlength=localStorage.getItem('cartlength')
       
        this.msalBroadcastService.inProgress$
        .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
        )
        .subscribe(() => {
          debugger
        this.setLoginDisplay();
        });
        // this.id = this.route.snapshot.paramMap.get('id_token');
        if(baseUrl=='https://localhost:44328/'){
            this.mycourseslink='/blog-style-2'
        }
        else if(baseUrl=='https://testugetitapi.fadelsoft.com/'){
        this.mycourseslink='/blog-style-2'
        }
        else if(baseUrl=='http://testugetitapi.fadelsoft.com/'){
            this.mycourseslink='/blog-style-2'
        }
        if(window.location.hash != "" && sessionStorage.getItem("hashLogin")== null){
            this.id =window.location.hash
            sessionStorage.setItem("hashLogin",window.location.hash)
            this.loggedIn=true
        }else{
            sessionStorage.removeItem("hashLogin")
            this.loggedIn=false;
        }

        this.GetTechnologies();
        this.GetAllCoursePlans();
        this.GetCartItemsLength();
    }

    GetCartItemsLength(){
      var userid=localStorage.getItem('AzureUserId')
      this._authService.GetCartItems(userid).subscribe((finalresult: any) => {
        debugger
        console.log(finalresult);
        // var finalresult=JSON.parse(finalresult)
        this.cartlength=finalresult.result.length
      });
    }

    setLoginDisplay() {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
      }

    OnClick(id:any){
        debugger
        this._router.navigate(['/single-courses/'+id]);
        setTimeout(() => {
            window.location.reload();

        }, 1000);
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }

    login(userFlowRequest?: RedirectRequest | PopupRequest) {
        debugger
        if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
          if (this.msalGuardConfig.authRequest) {
            this.authService.loginPopup({...this.msalGuardConfig.authRequest, ...userFlowRequest} as PopupRequest)
              .subscribe((response: AuthenticationResult) => {
                debugger
                this.authService.instance.setActiveAccount(response.account);
              });
          } else {
            this.authService.loginPopup(userFlowRequest)
              .subscribe((response: AuthenticationResult) => {
                debugger
                this.authService.instance.setActiveAccount(response.account);
              });
          }
        } else {
          if (this.msalGuardConfig.authRequest){
            this.authService.loginRedirect({...this.msalGuardConfig.authRequest, ...userFlowRequest} as RedirectRequest);
          } else {
            this.authService.loginRedirect(userFlowRequest);
          }
        }
      }

    // logOut(){
    //    sessionStorage.removeItem("hashLogin")
    //     window.location.href=window.location.origin;
    // }

    logout() {
        localStorage.setItem('AzureUserId','');
        this.authService.logout();
      }

    GetTechnologies(){
        this._authService.GetCoursesForMenu().subscribe((finalresult: any) => {
            var values=JSON.parse(finalresult)
            this.technologies=values.result;

            var technologyids = this.technologies.map(item => item.technologyId)
            .filter((value, index, self) => self.indexOf(value) === index);

            for(let i=0;i<technologyids.length;i++)
            {
              const tabledata=new tableData();

              for(let j=0;j<this.technologies.length;j++){
                
                const excel=new courses();
                  if(this.technologies[j].technologyId==technologyids[i] ){
                    excel.courseId=this.technologies[j].courseId;
                   
                    excel.courseName=this.technologies[j].courseName;
                    excel.technologyId=this.technologies[j].technologyId;
                    excel.technologyName=this.technologies[j].technologyName;
                    this.ListData.push(excel);
                  }

              }
              tabledata.technologyName=this.ListData[0].technologyName;
              tabledata.technologyId=this.ListData[0].technologyId;

            //   tabledata.plotName=this.receiptsList[i].plotName;
              tabledata.model=this.ListData;

              this.finaltabledata.push(tabledata)
              this.ListData=[];
            }
        })
    }

    GetAllCoursePlans(){
        debugger
        this._authService.GetAllCoursePlans().subscribe((finalresult: any) => {
          debugger
          this.courseplans=finalresult.result
        })
    }

    GoToPage(id:any){
        this._router.navigate(['/courses-2-columns-style-1/',id]);
        setTimeout(() => {
            window.location.reload();

        }, 1000);
    }

    ngOnDestroy(): void {
        this._destroying$.next(undefined);
        this._destroying$.complete();
      }
}