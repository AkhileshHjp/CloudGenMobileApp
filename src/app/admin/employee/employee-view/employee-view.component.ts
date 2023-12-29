import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  emp_form !: FormGroup
  emp_data: any
  profile_picture: string = "../../../assets/profileimage.jpg"


  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _shared: SharedService
  ) {
    this.emp_data = this._router.getCurrentNavigation()?.extras
  }

  ngOnInit(): void {
    console.log(this.emp_data);
    this.emp_form = this.fb.group({
      employee_branch: ['', Validators.required],
      employee_type: ['', Validators.required],
      employee_designation: ['', Validators.required],
      employee_id: ['', Validators.required],
      login_userid: ['', Validators.required],
      password: ['', Validators.required],
      employee_first_name: ['', Validators.required],
      employee_last_name: ['', Validators.required],
      gender: ['', Validators.required],
      mobile_no: ['', Validators.required],
      phone_no: ['', Validators.required],
      alternate_number: ['', Validators.required],
      dob: ['', Validators.required],
      aadhar_no: ['', Validators.required],
      pan_no: ['', Validators.required],
      salary_ctc: ['', Validators.required],
      qualification: ['', Validators.required],
      profile_picture: ['',],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      area_code: ['', Validators.required],
      address: ['', Validators.required],
      employee_department: ['', Validators.required],
      reporting_manager: ['', Validators.required],
      current_status: ['', Validators.required],
      join_date: ['', Validators.required],
      exit_date: ['', Validators.required],
    })

    this.emp_form.patchValue(this.emp_data)


    if (this.emp_data.profile_picture) {
      this.profile_picture = this._shared.base_url + this.emp_data.profile_picture
    } else {
      this.profile_picture = "../../../assets/profileimage.jpg"
    }
  }

}
