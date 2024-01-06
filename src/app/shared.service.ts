import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   
  base_url:any = 'https://turningbrain.in/'
  emp_data :any
  branch_data: any
  lead_sheet :any


  
  getBranchData(data:any){
      this.branch_data = data
  }
  
  setLeadSheet(data:any){
    this.lead_sheet =  data
  }
  
  employee_data(data:any){
   this.emp_data =  data
  }

}
