import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-assign-lead',
  templateUrl: './assign-lead.component.html',
  styleUrls: ['./assign-lead.component.css']
})
export class AssignLeadComponent {
  emp_data: any
  data: any;
  LoginData: any
  LeadAssignedTo: any
  assignFrom !: FormGroup
  constructor(
    private _crud: CrudService,
    @Inject(MAT_DIALOG_DATA) public LeadData: any,
    private _FB: FormBuilder

  ) { }

  ngOnInit(): void {
    this.assignFrom = this._FB.group({
      productname: [''],
      client_name: [''],
      contact_no: [''],

    })

    console.log(this.LeadData);
    this.assignFrom.patchValue(this.LeadData)


    this._crud.get_emp().subscribe(
      (res: any) => {
        console.log(res);
        this.emp_data = res.reverse()


      }
    )

    this.data = localStorage.getItem('isLogin')
    this.LoginData = JSON.parse(this.data)
  }

  onChange(id: any) {
    this.LeadAssignedTo = id.target.value
    console.log(id.target.value);
  }

  onAssign() {
    // const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // const checkedValues = new Array

    // checkboxes.forEach(function (checkbox) {
    //   checkedValues.push(checkbox.attributes[3].value);
    // });
    // for (let i = 0; i < checkboxes.length; i++) {
    //   this.leadAssign(checkedValues.toString().split(',')[i])
    // }

    const assigndata = new FormData()
    assigndata.append('LeadAssignedTo', this.LeadAssignedTo),
      assigndata.append('AssignedBy', this.LoginData.employeeId),
      assigndata.append('LeadStatus', '1')
    assigndata.append('LeadID',  this.LeadData.id)

    this._crud.assign_lead(assigndata).subscribe(
      (res: any) => {
        console.log(res);
        alert(res)
      },
      (error) => {
        console.log(error);
      }
    )



  }



}
