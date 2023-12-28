import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   
  base_url:any = 'https://turningbrain.in/'
  emp_data :any
  branch: any
  lead_sheet :any

  getBranchData(data:any){
      this.branch = data
  }
  
  setLeadSheet(data:any){
    this.lead_sheet =  data
  }
  
  employee_data(data:any){
   this.emp_data =  data
  }

}
