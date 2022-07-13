import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

export class FinalData{
	planId:any
	planName:any
	length:any
	Price:any
	model:plans[];
}


export class plans{
	planid:any
	planname:any
	CourseId:any
	Price:any
} 

@Component({
  selector: 'app-courses-grid-style-two-columns-three-page',
  templateUrl: './courses-grid-style-two-columns-three-page.component.html',
  styleUrls: ['./courses-grid-style-two-columns-three-page.component.scss']
})
export class CoursesGridStyleTwoColumnsThreePageComponent implements OnInit {
  plans: any;
  ListData: Array<plans>=[];
	finaltabledata: Array<FinalData>=[];
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.GetAllCoursePlans();
  }

  GetAllCoursePlans(){
    debugger
    this._authService.GetAllCoursePlans().subscribe((finalresult: any) => {
			debugger
			this.plans=finalresult.result;
			var ids = this.plans.map(item => item.planId)
        	.filter((value, index, self) => self.indexOf(value) === index);
			
			for(let i=0;i<ids.length;i++)
            {
              const tabledata=new FinalData();

              for(let j=0;j<this.plans.length;j++){
                
                const excel=new plans();
                  if(this.plans[j].planId==ids[i] ){
					  excel.planid=this.plans[j].planId;
					  excel.planname=this.plans[j].planName
                    excel.CourseId=this.plans[j].courseId;
					excel.Price=this.plans[j].price
                    this.ListData.push(excel);
                  }

              }
			  tabledata.planId=this.ListData[0].planid;
              tabledata.planName=this.ListData[0].planname;
              tabledata.model=this.ListData;
			  tabledata.length=this.ListData.length
			  tabledata.Price=this.ListData[0].Price
              this.finaltabledata.push(tabledata)
              this.ListData=[];
            }

			
		  })

  }

}
