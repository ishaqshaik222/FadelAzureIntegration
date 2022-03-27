import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style-one',
  templateUrl: './header-style-one.component.html',
  styleUrls: ['./header-style-one.component.scss']
})
export class HeaderStyleOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
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

    loadLogin()
    {
        window.location.href="https://fadelstudentsportal.b2clogin.com/fadelStudentsPortal.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_studentPortalSignUpAndSignIn&client_id=ca12fdfb-881f-4dd7-8853-a4016b4006be&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F&scope=openid&response_type=id_token&prompt=login"
    }

}