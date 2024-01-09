import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';
import { AssignLeadComponent } from '../assign-lead/assign-lead.component';

@Component({
  selector: 'app-leadsheet-list',
  templateUrl: './leadsheet-list.component.html',
  styleUrls: ['./leadsheet-list.component.css']
})
export class LeadsheetListComponent implements OnInit {
  lead_data: any;
  filter_lead_data: any
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService,
    private  _dolog: MatDialog
  ) { }

  ngOnInit(): void {
    this._crud.get_leadSheet().subscribe(
      (res: any) => {
        console.log(res);
        this.lead_data = res.reverse()
        this.filter_lead_data = res
      }
    )
  }


  onEdit(data: any) {
    this._routing.navigate(['/admin/addLead'], data)

  }

  onView(data: any) {
    this._routing.navigate(['/admin/viewLead'], data)
  }


  onLeadAassign(data:any){
    this._dolog.open(AssignLeadComponent,{
      disableClose:true,
      data:data
    })
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
