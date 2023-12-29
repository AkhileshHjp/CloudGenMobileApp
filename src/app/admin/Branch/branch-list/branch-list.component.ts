import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent  implements OnInit{
  branch_data: any

  constructor(
    // private _crud : AdminCrudService
    private _crud: CrudService,
    private _router: Router,
    private _shared: SharedService
  ) { }

  ngOnInit(): void {
    this._crud.get_branch().subscribe(
      (res: any) => {
        this.branch_data = res
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
