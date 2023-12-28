import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient,
    private _shared: SharedService
  ) { }

  baseUrl: string = this._shared.base_url

  login(data:any){
    return  this.http.post(`${this.baseUrl}/api/Login`, data)
  }
  get_emp() {
    return this.http.get(`${this.baseUrl}api/EmployeeManagement`)
  }

  post_emp(data: any) {
    return this.http.post(`${this.baseUrl}api/EmployeeManagement`, data)
  }

  put_emp(data: any, id: any) {
    return this.http.post(`${this.baseUrl}/api/EmployeeManagement/${id}`, data)
  }

  get_cuntery() {
    return this.http.get(`${this.baseUrl}api/SelectCountry`)
  }

  get_state() {
    return this.http.get(`${this.baseUrl}api/SelectState`)
  }

  get_city() {
    return this.http.get(`${this.baseUrl}api/SelectCity`)
  }


  // for branch  manegment

  get_branch() {
    return this.http.get(`${this.baseUrl}/api/BranchManage`)
  }

  post_branch(data: any) {
    return this.http.post(`${this.baseUrl}/api/BranchManage`, data)
  }

  put_branch(data: any, id: any) {
    return this.http.post(`${this.baseUrl}/api/BranchManage/${id}`, data)
  }

  // FOR LEADE 

  get_leadSheet() {
    return this.http.get(`${this.baseUrl}/api/ManageLeadSheet`)
  }

  post_leadSheet(data: any) {
    return this.http.post(`${this.baseUrl}/api/ManageLeadSheet`, data)
  }

  put_leadSheet(data: any, id: any) {
    return this.http.post(`${this.baseUrl}/api/ManageLeadSheet/${id}`, data)
  }




}