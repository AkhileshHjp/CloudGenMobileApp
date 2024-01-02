import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-leadsheet-list',
  templateUrl: './leadsheet-list.component.html',
  styleUrls: ['./leadsheet-list.component.css']
})
export class LeadsheetListComponent implements OnInit{
  lead_data: any
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService
  ) { }

  ngOnInit(): void {
    this._crud.get_leadSheet().subscribe(
      (res: any) => {
        console.log(res);
        this.lead_data = res.reverse()
      }
    )
  }


  onEdit(data: any) {
    this._routing.navigate(['/admin/addLead'] ,data)

  }
}
