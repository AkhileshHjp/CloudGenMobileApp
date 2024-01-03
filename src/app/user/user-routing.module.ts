import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AssignLeadComponent } from './Lead/assign-lead/assign-lead.component';
import { LeadListComponent } from './Lead/lead-list/lead-list.component';
import { AddLedeSheetComponent } from './Lead/add-lede-sheet/add-lede-sheet.component'
import { FollowUpLeadComponent } from './Lead/follow-up-lead/follow-up-lead.component';
const routes: Routes = [
  {
    path: '', component: UserHomeComponent, children: [
      { path: '', component: UserDashboardComponent },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'addlead', component: AddLedeSheetComponent },
      { path: 'assignLead', component: AssignLeadComponent },
      { path: 'leadList', component: LeadListComponent },
      { path: 'LeadFollUp', component: FollowUpLeadComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
