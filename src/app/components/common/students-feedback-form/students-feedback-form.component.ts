import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { clear } from 'console';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-students-feedback-form',
  templateUrl: './students-feedback-form.component.html',
  styleUrls: ['./students-feedback-form.component.scss']
})
export class StudentsFeedbackFormComponent implements OnInit {
  studentForm: FormGroup;
  success: string;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) { 
    this.studentForm = this._formBuilder.group({
      name   : ['', []],
      address   : ['', []],
      email   : ['', []],
      phoneno   : ['', []],
      description   : ['', []],
    });
  }

  ngOnInit(): void {
    
  }
  clear(){
    this.studentForm.controls['name'].setValue('')
    this.studentForm.controls['address'].setValue('')
    this.studentForm.controls['email'].setValue('')
    this.studentForm.controls['phoneno'].setValue('')
    this.studentForm.controls['description'].setValue('')
  }

  SendMsg()
  {
      debugger
      if (this.studentForm.invalid) {
          return;
      }
      const studentmessage = this.studentForm.getRawValue();
      this._authService.SendMsg(studentmessage).subscribe((result: any) => {
          debugger
           var result = JSON.parse(result);
            if (result.status == "200") {
                //debugger
                this.success="Feedback submitted succesfully";
                setTimeout(() => {
                  this.success="";
                  this.clear();
                  // window.location.reload()
                }, 2000);
            }
            else {
            }
            (error) => {
   
           }
        });
  }

}
