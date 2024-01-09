import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { BranchListComponent } from './Branch/branch-list/branch-list.component';
import { AddBranchComponent } from './Branch/add-branch/add-branch.component';
import { ViewBranchComponent } from './Branch/view-branch/view-branch.component';
import { AddLeadsheetComponent } from './lead/add-leadsheet/add-leadsheet.component';
import { LeadsheetListComponent } from './lead/leadsheet-list/leadsheet-list.component';
import { ViewLeadsheetComponent } from './lead/view-leadsheet/view-leadsheet.component';
import { QuotationAddComponent } from './quotation/quotation-add/quotation-add.component';
import { QuotationViewComponent } from './quotation/quotation-view/quotation-view.component';
import { QuotationListComponent } from './quotation/quotation-list/quotation-list.component';
import { AssignLeadComponent } from './lead/assign-lead/assign-lead.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    BranchListComponent,
    AddBranchComponent,
    ViewBranchComponent,
    AddLeadsheetComponent,
    LeadsheetListComponent,
    ViewLeadsheetComponent,
    QuotationAddComponent,
    QuotationViewComponent,
    QuotationListComponent,
    AssignLeadComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule
    
  ]
})
export class AdminModule { }
