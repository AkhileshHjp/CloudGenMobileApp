import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  emp_form !: FormGroup
  country_data: any
  state_data: any
  filter_state_data: any
  city_data: any
  filter_city_data: any
  branch_name: any
  profile_img: any
  update_data: any
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _router: Router
  ) {
    this.update_data = this._router.getCurrentNavigation()?.extras
  }

  ngOnInit(): void {

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

    this._crud.get_branch().subscribe(
      (res: any) => {
        // console.log(res);
        this.branch_name = res
      }
    )
  }


  ngAfterViewInit() {
    this._crud.get_cuntery().subscribe(
      (res: any) => {
        // console.log(res);
        this.country_data = res
      }
    )

    this._crud.get_state().subscribe(
      (res: any) => {
        // console.log(res);
        this.state_data = res
      }
    )

    this._crud.get_city().subscribe(
      (res: any) => {
        // console.log(res);
        this.city_data = res
      }
    )

    if (this.update_data) {
      this.emp_form.patchValue(this.update_data)
    }
  }


  SetState(data: any) {
    // console.log(data.country_id);
    this.filter_state_data = this.state_data.filter((s: any) => s.country_id === data.country_id)

  }
  SetCity(data: any) {
    // console.log(data);

    this.filter_city_data = this.city_data.filter((c: any) => c.state_id === data.state_id)
    // console.log(this.filter_city_data);

  }


  onSubmit() {

    const empprmData = new FormData()
    empprmData.append('employee_branch', this.emp_form.get('employee_branch')?.value)
    empprmData.append('employee_type', this.emp_form.get('employee_type')?.value)
    empprmData.append('employee_designation', this.emp_form.get('employee_designation')?.value)
    empprmData.append('employee_id', this.emp_form.get('employee_id')?.value)
    empprmData.append('login_userid', this.emp_form.get('login_userid')?.value)
    empprmData.append('password', this.emp_form.get('password')?.value)
    empprmData.append('employee_first_name', this.emp_form.get('employee_first_name')?.value)
    empprmData.append('employee_last_name', this.emp_form.get('employee_last_name')?.value)
    empprmData.append('gender', this.emp_form.get('gender')?.value)
    empprmData.append('mobile_no', this.emp_form.get('mobile_no')?.value)
    empprmData.append('phone_no', this.emp_form.get('phone_no')?.value)
    empprmData.append('alternate_number', this.emp_form.get('alternate_number')?.value)
    empprmData.append('dob', this.emp_form.get('dob')?.value)
    empprmData.append('aadhar_no', this.emp_form.get('aadhar_no')?.value)
    empprmData.append('pan_no', this.emp_form.get('pan_no')?.value)
    empprmData.append('salary_ctc', this.emp_form.get('salary_ctc')?.value)
    empprmData.append('qualification', this.emp_form.get('qualification')?.value)
    empprmData.append('profile_picture', this.profile_img)
    empprmData.append('country', (this.emp_form.get('country')?.value).country_name)
    empprmData.append('state', (this.emp_form.get('state')?.value).state)
    empprmData.append('city', this.emp_form.get('city')?.value)
    empprmData.append('area_code', this.emp_form.get('area_code')?.value)
    empprmData.append('address', this.emp_form.get('address')?.value)
    empprmData.append('employee_department', this.emp_form.get('employee_department')?.value)
    empprmData.append('reporting_manager', this.emp_form.get('reporting_manager')?.value)
    empprmData.append('current_status', this.emp_form.get('current_status')?.value)
    empprmData.append('join_date', this.emp_form.get('join_date')?.value)
    empprmData.append('exit_date', this.emp_form.get('exit_date')?.value)

    this._crud.post_emp(empprmData).subscribe(
      (res: any) => {
        console.log(res);
        if (res == "Inserted successfully") {
          alert("add successfully")
          this._router.navigate(['/admin/viewEmp'])
        }
      }
    )
    console.log(this.emp_form.value);
  }

  onUpdate() {
    const empprmData = new FormData()
    empprmData.append('id', this.update_data.id)
    empprmData.append('employee_branch', this.emp_form.get('employee_branch')?.value)
    empprmData.append('employee_type', this.emp_form.get('employee_type')?.value)
    empprmData.append('employee_designation', this.emp_form.get('employee_designation')?.value)
    empprmData.append('employee_id', this.emp_form.get('employee_id')?.value)
    empprmData.append('login_userid', this.emp_form.get('login_userid')?.value)
    empprmData.append('password', this.emp_form.get('password')?.value)
    empprmData.append('employee_first_name', this.emp_form.get('employee_first_name')?.value)
    empprmData.append('employee_last_name', this.emp_form.get('employee_last_name')?.value)
    empprmData.append('gender', this.emp_form.get('gender')?.value)
    empprmData.append('mobile_no', this.emp_form.get('mobile_no')?.value)
    empprmData.append('phone_no', this.emp_form.get('phone_no')?.value)
    empprmData.append('alternate_number', this.emp_form.get('alternate_number')?.value)
    empprmData.append('dob', this.emp_form.get('dob')?.value)
    empprmData.append('aadhar_no', this.emp_form.get('aadhar_no')?.value)
    empprmData.append('pan_no', this.emp_form.get('pan_no')?.value)
    empprmData.append('salary_ctc', this.emp_form.get('salary_ctc')?.value)
    empprmData.append('qualification', this.emp_form.get('qualification')?.value)
    empprmData.append('profile_picture', this.profile_img)
    empprmData.append('country', (this.emp_form.get('country')?.value).country_name)
    empprmData.append('state', (this.emp_form.get('state')?.value).state)
    empprmData.append('city', this.emp_form.get('city')?.value)
    empprmData.append('area_code', this.emp_form.get('area_code')?.value)
    empprmData.append('address', this.emp_form.get('address')?.value)
    empprmData.append('employee_department', this.emp_form.get('employee_department')?.value)
    empprmData.append('reporting_manager', this.emp_form.get('reporting_manager')?.value)
    empprmData.append('current_status', this.emp_form.get('current_status')?.value)
    empprmData.append('join_date', this.emp_form.get('join_date')?.value)
    empprmData.append('exit_date', this.emp_form.get('exit_date')?.value)

    this._crud.put_emp(empprmData, this.update_data.id).subscribe(
      (res: any) => {
        console.log(res);
        if (res == "Updated successfully") {
          alert("Updated successfully")
          this._router.navigate(['/admin/viewEmp'])
        }
      }
    )
  }

  onFileChange(data: any) {
    this.profile_img = data.target.files[0]
  }

}
