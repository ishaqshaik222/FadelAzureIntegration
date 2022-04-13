import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: any;
  copyRight: any;
  description: any;
  address: any;
  phoneNo: any;
  email: any;
  linkedLink: any;
  twitterLink: any;
  facebookLink: any;
  whatsappLink: any;
  pinterestLink: any;

  constructor( private _authService:AuthService) { }

  ngOnInit(): void {
    this.GetCopyRights();
    this.GetCompanydetails();
  }
  GetCopyRights()
  {
      debugger
      this._authService.GetCopyRights().subscribe((result: any) => {
          debugger
           var result = JSON.parse(result);
            if (result.status == "200") {
                debugger
                console.log(result.result)
                this.year= result.result[0].year;
                this.copyRight= result.result[0].copyRight;
                this.description= result.result[0].description;
                
                setTimeout(() => {
                }, 1000);
            }
            else {
            }
            (error) => {
   
           }
        });
  }
  GetCompanydetails()
  {
      debugger
      this._authService.GetCompanydetails().subscribe((result: any) => {
          debugger
           var result = JSON.parse(result);
            if (result.status == "200") {
                debugger
                console.log(result.result)
                this.address= result.result[0].address;
                this.phoneNo= result.result[0].phoneNo;
                this.email= result.result[0].email;
                this.linkedLink= result.result[0].linkedLink;
                this.twitterLink= result.result[0].twitterLink;
                this.facebookLink= result.result[0].facebookLink;
                this.whatsappLink= result.result[0].whatsappLink;
                this.pinterestLink= result.result[0].pinterestLink;
                
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
