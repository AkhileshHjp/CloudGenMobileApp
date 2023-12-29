import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent {

  quotation_data: any

  constructor(
    // private _crud : AdminCrudService
    private _crud: CrudService,
    private _router: Router,
    private _shared: SharedService
  ) { }

  ngOnInit(): void {
    this._crud.get_quotation().subscribe(
      (res: any) => {
        this.quotation_data = res
      }
    )
  }

  onView(data: any) {
    this._router.navigate(['/admin/addBranch'], data)
  }

  onEdit(data: any) {
    // this._shared.branch_data.next(data)
    this._shared.getBranchData(data)
    this._router.navigate(['admin/addBranch'])
  }
}
