import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent {
  branch_form !: FormGroup
  update_data: any

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _router: Router,
    private _shared: SharedService
  ) {
    this.update_data = this._router.getCurrentNavigation()?.extras
    console.log(this.update_data);

  }

  ngOnInit(): void {
    this.branch_form = this.fb.group({
      BranchName: ['', Validators.required],
      BranchEmail: ['', Validators.required],
      ContactPerson: ['', Validators.required],
      LandLineNo: ['', Validators.required],
      ContactPersonMobile: ['', Validators.required],
      ContactPersonEmail: ['', Validators.required],
      GSTNo: ['', Validators.required],
      PanNo: ['', Validators.required],
      PinCode: ['', Validators.required],
      BranchRegistrationNo: ['', Validators.required],
      StateName: ['', Validators.required],
      StateCode: ['', Validators.required],
      RegistrationDate: ['', Validators.required],
      CityName: ['', Validators.required],
      CityCode: ['', Validators.required],
      BranchAddress: ['', Validators.required],
    })

  }

  ngAfterViewInit() {
    if (this.update_data) {
      this.branch_form.patchValue(this.update_data)
    }

  }





 
}
