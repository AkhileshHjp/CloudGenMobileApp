import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  user_permission = [
    {
      laed : false,
      lead1:true,
      lead2 : true
    },
    {
      branch: true,
      1.1:true
    }

  ]
  name = "UserName";
  designation = "sale"
  onEmpSubMenu: boolean = false
  onLeadSubMenu: boolean = false
  onBranchSubMenu: boolean = false
  onQuotationSubMenu: boolean = false
  ImgUrl: string = '../../../assets/usericon.svg'
  staffLogin: boolean = true
  onMenu: boolean = false
  LoginData: any
  data: any
  constructor(
    private _router: Router
  ) { }


  ngOnInit(): void {
    this.data = localStorage.getItem('isLogin')
    this.LoginData = JSON.parse(this.data)
    console.log(this.LoginData);
    console.log(this.user_permission);
    
  }


  onProfile() {

  }

  LeadSubMenu() {
    this.onLeadSubMenu = !this.onLeadSubMenu;
  }
  branchSubMenu() {
    this.onBranchSubMenu = !this.onBranchSubMenu
  }

  QuotationSubMenu() {
    this.onQuotationSubMenu = !this.onQuotationSubMenu
  }

  logout() {
    this._router.navigate(['/'])
  }

}
