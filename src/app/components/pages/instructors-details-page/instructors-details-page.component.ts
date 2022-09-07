import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-instructors-details-page',
  templateUrl: './instructors-details-page.component.html',
  styleUrls: ['./instructors-details-page.component.scss']
})
export class InstructorsDetailsPageComponent implements OnInit {
  InstrcuctorName: any;
  InstructorImage: any;
  InstrcuctorShortDesc: any;
  InstrcuctorLongDesc: any;
  InstructorExperience: any;
  courses: any;
  stars: number[] = [1, 2, 3, 4, 5];
  
  constructor(private approute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router,) { }

  ngOnInit(): void {
    var id = this.approute.snapshot.params['id'];
    this.GetInstructorDetails(id)
    this.GetCoursesByFaculty(id)
  }

  GetInstructorDetails(id){
    debugger
    this._authService.GetFacultyById(id).subscribe((finalresult: any) => {
      if (finalresult.status == "200") {
        console.log('chapters', finalresult.result)
        
        this.InstrcuctorName = finalresult.result.displayName;
        this.InstructorImage = finalresult.result.imageUrl;
        this.InstrcuctorShortDesc = finalresult.result.shortDescription.replace(/<[^>]*>/g, '');
        this.InstrcuctorLongDesc = finalresult.result.longDescription.replace(/<[^>]*>/g, '');
        this.InstructorExperience=finalresult.result.experience;
      }
    })
  }

  GoTOPage(id){
    this._router.navigate(['/single-courses/',id]);
        setTimeout(() => {
            window.location.reload();

        }, 1000);
  }

  GetCoursesByFaculty(id){
    debugger
    this._authService.GetCoursesByFaculty(id).subscribe((finalresult: any) => {
      if (finalresult.status == "200") {
        console.log('chapters', finalresult.result)
        
        this.courses=finalresult.result
      }
    })
  }

}
