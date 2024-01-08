import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-assign-lead',
  templateUrl: './assign-lead.component.html',
  styleUrls: ['./assign-lead.component.css']
})
export class AssignLeadComponent {
  lead_data: any;
  filter_lead_data: any
  emp_data: any
  data: any;
  LoginData: any
  LeadAssignedTo: any
  constructor(
    private _crud: CrudService
  ) { }

  ngOnInit(): void {


    this._crud.get_leadSheet().subscribe(
      (res: any) => {
        console.log(res.reverse());
        this.lead_data = res.reverse()
        this.filter_lead_data = res
      }
    )

    this._crud.get_emp().subscribe(
      (res: any) => {
        console.log(res);
        this.emp_data = res.reverse()
        // FOR TESTING 
        // this.lead_data = res

      }
    )

    this.data = localStorage.getItem('isLogin')
    this.LoginData = JSON.parse(this.data)
    console.log(this.LoginData.employeeId);


  }



  onChange(id: any) {
    this.LeadAssignedTo = id.target.value
    console.log(id.target.value);
  }
  onAssign() {


    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedValues = new Array

    checkboxes.forEach(function (checkbox) {
      checkedValues.push(checkbox.attributes[3].value);
    });

    

    
    for (let i = 0; i < checkboxes.length; i++) {
      // const assigndata = new FormData()
      // assigndata.append('LeadAssignedTo', this.LeadAssignedTo),
      //   assigndata.append('AssignedBy', this.LoginData.employeeId),
      //   assigndata.append('LeadStatus', '1')
      // assigndata.append('LeadID', checkedValues.toString().split(',')[i])

      this.leadAssign(checkedValues.toString().split(',')[i])

      // this._crud.assign_lead(assigndata).subscribe(
      //   (res: any) => {
      //     console.log(res);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // )
      
    }
   
  }

  
  leadAssign(id:any){
    console.log(`lead_id : ${id}`);
    console.log(`assign_status : 1`);
    console.log(`assign_by', ${this.LoginData.employeeId}`);
    console.log(`assign_to', ${this.LeadAssignedTo}`);

    const assigndata = new FormData()
    assigndata.append('LeadAssignedTo', this.LeadAssignedTo),
      assigndata.append('AssignedBy', this.LoginData.employeeId),
      assigndata.append('LeadStatus', '1')
    assigndata.append('LeadID', id)

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


  onSearch(e: any) {

    this.lead_data = this.filter_lead_data.filter((res: any) => {
      if (res.productname.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (res.client_name.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (res.contact_no.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (res.contactperson.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (res.address.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      return false
    })
  }
}
