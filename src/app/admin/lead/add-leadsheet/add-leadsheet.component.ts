import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-leadsheet',
  templateUrl: './add-leadsheet.component.html',
  styleUrls: ['./add-leadsheet.component.css']
})
export class AddLeadsheetComponent {
  update_data: any
  lead_form !: FormGroup
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _shared: SharedService,
    private _routing: Router
  ) {
    this.update_data = this._routing.getCurrentNavigation()
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

    if (this.update_data.id) {
      this.lead_form.patchValue(this.update_data)
    }


  }


  onSubmit() {
    console.log(this.lead_form.value);
    const lead_data = new FormData()
    lead_data.append('client_name', this.lead_form.get('client_name')?.value)
    lead_data.append('contact_no', this.lead_form.get('contact_no')?.value)
    lead_data.append('eMAIL_ID', this.lead_form.get('eMAIL_ID')?.value)
    lead_data.append('address', this.lead_form.get('address')?.value)
    lead_data.append('productname', this.lead_form.get('productname')?.value)
    lead_data.append('contactperson', this.lead_form.get('contactperson')?.value)

    this._crud.post_leadSheet(lead_data).subscribe(
      (res: any) => {
        console.log(res);
        this._routing.navigate(['admin/leadView'])
      }
    )

  }
  onUpdate() {
    console.log(this.lead_form.value);
    const lead_data = new FormData()
    lead_data.append('client_name', this.lead_form.get('client_name')?.value)
    lead_data.append('contact_no', this.lead_form.get('contact_no')?.value)
    lead_data.append('eMAIL_ID', this.lead_form.get('eMAIL_ID')?.value)
    lead_data.append('address', this.lead_form.get('address')?.value)
    lead_data.append('productname', this.lead_form.get('productname')?.value)
    lead_data.append('contactperson', this.lead_form.get('contactperson')?.value)

    this._crud.put_leadSheet(lead_data, this.update_data.id).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'Update successfully') {
          alert(res)
          this._routing.navigate(['/admin/leadView'])
        }
      }
    )

  }

  ngOnDestroy() {
    this._shared.setLeadSheet('')
  }

}
