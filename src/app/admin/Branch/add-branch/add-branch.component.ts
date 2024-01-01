import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent {
  branch_form !: FormGroup
  update_data: any
  id: any = 0

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _router: Router,
    private _shared: SharedService
     ) {
    // this.id = this._shared.branch.id
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
    // this._shared.branch_data.subscribe(
    //   (res: any) => {
    //     console.log(res);
    //      this.branch_form.patchValue(res)
    //   }
    // )


    if (this.id > 0) {
      this.branch_form.patchValue(this._shared.branch)

    }

  }

  onSubmit() {
    console.log("onSubmit");

    const branch = new FormData()
    branch.append('BranchName', this.branch_form.get('BranchName')?.value)
    branch.append('BranchEmail', this.branch_form.get('BranchEmail')?.value)
    branch.append('ContactPerson', this.branch_form.get('ContactPerson')?.value)
    branch.append('LandLineNo', this.branch_form.get('LandLineNo')?.value)
    branch.append('ContactPersonMobile', this.branch_form.get('ContactPersonMobile')?.value)
    branch.append('ContactPersonEmail', this.branch_form.get('ContactPersonEmail')?.value)
    branch.append('GSTNo', this.branch_form.get('GSTNo')?.value)
    branch.append('PanNo', this.branch_form.get('PanNo')?.value)
    branch.append('PinCode', this.branch_form.get('PinCode')?.value)
    branch.append('BranchRegistrationNo', this.branch_form.get('BranchRegistrationNo')?.value)
    branch.append('StateName', this.branch_form.get('StateName')?.value)
    branch.append('StateCode', this.branch_form.get('StateCode')?.value)
    branch.append('RegistrationDate', this.branch_form.get('RegistrationDate')?.value)
    branch.append('CityName', this.branch_form.get('CityName')?.value)
    branch.append('CityCode', this.branch_form.get('CityCode')?.value)
    branch.append('BranchAddress', this.branch_form.get('BranchAddress')?.value)

    this._crud.post_branch(branch).subscribe(
      (res: any) => {
        console.log(res);
        if (res === 'Inserted successfully') {
          alert(res)
          this._router.navigate(['/admin/branchList'])
        }
      }
    )
  }


  onUpdate() {

    const branch_data = new FormData()
    branch_data.append('BranchName', this.branch_form.get('BranchName')?.value)
    branch_data.append('BranchEmail', this.branch_form.get('BranchEmail')?.value)
    branch_data.append('ContactPerson', this.branch_form.get('ContactPerson')?.value)
    branch_data.append('LandLineNo', this.branch_form.get('LandLineNo')?.value)
    branch_data.append('ContactPersonMobile', this.branch_form.get('ContactPersonMobile')?.value)
    branch_data.append('ContactPersonEmail', this.branch_form.get('ContactPersonEmail')?.value)
    branch_data.append('GSTNo', this.branch_form.get('GSTNo')?.value)
    branch_data.append('PanNo', this.branch_form.get('PanNo')?.value)
    branch_data.append('PinCode', this.branch_form.get('PinCode')?.value)
    branch_data.append('BranchRegistrationNo', this.branch_form.get('BranchRegistrationNo')?.value)
    branch_data.append('StateName', this.branch_form.get('StateName')?.value)
    branch_data.append('StateCode', this.branch_form.get('StateCode')?.value)
    branch_data.append('RegistrationDate', this.branch_form.get('RegistrationDate')?.value)
    branch_data.append('CityName', this.branch_form.get('CityName')?.value)
    branch_data.append('CityCode', this.branch_form.get('CityCode')?.value)
    branch_data.append('BranchAddress', this.branch_form.get('BranchAddress')?.value)

    this._crud.put_branch(branch_data ,'').subscribe(
      (res: any) => {
        console.log(res);
        if (res == "Updated successfully") {
          alert(res)
          this._router.navigate(['/admin/branchList'])
        }
      }
    )
  }


  ngOnDestroy() {
    this._shared.getBranchData('')
  }
}
