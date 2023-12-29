import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then((a: any) => a.AdminModule)
  },
  {path : 'user',
   loadChildren: ()=> import('../app/user/user.module').then((u)=>u.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
