import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-leadsheet',
  templateUrl: './view-leadsheet.component.html',
  styleUrls: ['./view-leadsheet.component.css']
})
export class ViewLeadsheetComponent {
  update_data: any
  lead_form !: FormGroup
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _shared: SharedService,
    private _routing: Router
  ) {
    this.update_data = this._routing.getCurrentNavigation()?.extras
  }

  ngOnInit(): void {
    this.lead_form = this.fb.group({
      client_name: ['', Validators.required],
      contact_no: ['', Validators.required],
      eMAIL_ID: ['', Validators.required],
      address: ['', Validators.required],
      productname: ['', Validators.required],
      contactperson: ['', Validators.required],
    })

      
      this.lead_form.patchValue(this.update_data)
 


  }

}
