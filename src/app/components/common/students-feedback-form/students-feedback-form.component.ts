import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-students-feedback-form',
  templateUrl: './students-feedback-form.component.html',
  styleUrls: ['./students-feedback-form.component.scss']
})
export class StudentsFeedbackFormComponent implements OnInit {
  studentForm: FormGroup;

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
