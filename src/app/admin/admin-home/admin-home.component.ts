import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  name = "Macreel";
  designation = "Admin"
  onEmpSubMenu: boolean = false
  onLeadSubMenu: boolean = false
  onBranchSubMenu: boolean = false
  onQuotationSubMenu: boolean = false
  ImgUrl: string = '../../../assets/usericon.svg'
  staffLogin: boolean = true
  onMenu: boolean = false
  LoginData :any
  data:any
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
   this.data = localStorage.getItem('isLogin')
   this.LoginData =  JSON.parse(this.data)
    console.log(this.LoginData);
    
  }


  onProfile() {

  }

  empSubMenu() {
    this.onEmpSubMenu = !this.onEmpSubMenu;
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
