import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AddLedeSheetComponent } from './Lead/add-lede-sheet/add-lede-sheet.component';
import { LeadListComponent } from './Lead/lead-list/lead-list.component';
import { AssignLeadComponent } from './Lead/assign-lead/assign-lead.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FollowUpLeadComponent } from './Lead/follow-up-lead/follow-up-lead.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserDashboardComponent,
    AddLedeSheetComponent,
    LeadListComponent,
    AssignLeadComponent,
    FollowUpLeadComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
     ReactiveFormsModule
  ]
})

export class UserModule { }
