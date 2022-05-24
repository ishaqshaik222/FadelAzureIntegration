import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    id:string="";
    loggedIn:boolean=false
    cartlength: string;
    technologies: any;

    ListData: Array<courses>=[];
    finaltabledata: Array<tableData>=[];

    constructor(private route: ActivatedRoute,
        private _authService: AuthService,
        ) { }

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

        this.GetTechnologies();
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

    GetTechnologies(){
        debugger
        this._authService.GetCoursesForMenu().subscribe((finalresult: any) => {
            debugger
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



}