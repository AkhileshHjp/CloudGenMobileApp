import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { AddBranchComponent } from './Branch/add-branch/add-branch.component';
import { ViewBranchComponent } from './Branch/view-branch/view-branch.component';
import { BranchListComponent } from './Branch/branch-list/branch-list.component';
import { AddLeadsheetComponent } from './lead/add-leadsheet/add-leadsheet.component';
import { ViewLeadsheetComponent } from './lead/view-leadsheet/view-leadsheet.component';
import { LeadsheetListComponent } from './lead/leadsheet-list/leadsheet-list.component';
import { QuotationAddComponent } from './quotation/quotation-add/quotation-add.component';
import { QuotationViewComponent } from './quotation/quotation-view/quotation-view.component';
import { QuotationListComponent } from './quotation/quotation-list/quotation-list.component';

const routes: Routes = [
  {path:'', component:AdminHomeComponent, children:[
    {path:'', component:AdminDashboardComponent},
    {path : 'addEmployee', component: AddEmployeeComponent},
    {path : 'employeeList', component : EmployeeListComponent},
    {path : 'employeeView', component :EmployeeViewComponent},
    {path :'addBranch', component :  AddBranchComponent},
    {path : 'viewBranch', component :  ViewBranchComponent},
    {path :'branchList',component :  BranchListComponent},
    {path:'addLead', component : AddLeadsheetComponent},
    {path :'viewLead', component: ViewLeadsheetComponent},
    {path: 'leadList', component :  LeadsheetListComponent},
    {path: 'addQuotaion', component: QuotationAddComponent },
    {path: 'viewQuotaion', component: QuotationViewComponent },
    {path: 'quotaionList', component: QuotationListComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule implements OnInit{

  ngOnInit(): void {
      
  }

 }
