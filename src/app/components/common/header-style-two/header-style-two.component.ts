import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-header-style-two',
    templateUrl: './header-style-two.component.html',
    styleUrls: ['./header-style-two.component.scss']
})
export class HeaderStyleTwoComponent implements OnInit {
    id:string="";
    loggedIn:boolean=false
    cartlength: string;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        debugger;
        this.cartlength=localStorage.getItem('cartlength')
        // this.id = this.route.snapshot.paramMap.get('id_token');
        if(window.location.hash != "" && sessionStorage.getItem("hashLogin")== null){
            this.id =window.location.hash
            sessionStorage.setItem("hashLogin",window.location.hash)
            this.loggedIn=true
        }else{
            sessionStorage.removeItem("hashLogin")
            this.loggedIn=false;
        }
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

    logOut(){
       sessionStorage.removeItem("hashLogin")
        window.location.href=window.location.origin;
    }

}