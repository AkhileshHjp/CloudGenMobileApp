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
  filter_branch_data: any
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
        this.filter_branch_data =  res
      }
    )
  }

  onView(data: any) {
    this._router.navigate(['/admin/viewBranch'], data)
  }

  onEdit(data: any) {
    this._router.navigate(['admin/addBranch'] , data)
  }

  OnSearch(e:any){    
     this.branch_data =  this.filter_branch_data.filter((re:any)=>{
      if (re.BranchName.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (re.LandLineNo.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }
      
      if (re.CityName.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (re.ContactPerson.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      if (re.ContactPersonMobile.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        return true;
      }

      return false

     }
     )

  }

}
