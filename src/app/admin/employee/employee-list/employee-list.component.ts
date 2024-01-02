import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  lead_data: any
  constructor(
    // private _crud : AdminCrudService
    private _crud: CrudService,
    private _router: Router,
    private _shared: SharedService
  ) { }
  url: string = this._shared.base_url

  ngOnInit(): void {
    this._crud.get_emp().subscribe(
      (res: any) => {
        // console.log(res);
        this.lead_data = res
      }
    )
  }

  OnView(data: any) {
    this._router.navigate(['/admin/employeeView'], data)
  }

  OnEdit(data: any) {
    console.log(data);
    this._router.navigate(['admin/addEmployee'], data)
  }
}
