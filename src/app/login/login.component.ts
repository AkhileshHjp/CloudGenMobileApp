import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  constructor(
    private _router: Router,
    private _crud: CrudService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    if (!this.loginForm.valid) {
      alert("Plz Fill username and password..!!")
      return
    } else {
      const loginForm = new FormData()
      loginForm.append('username', this.loginForm.get('username')?.value)
      loginForm.append('password', this.loginForm.get('password')?.value)

      this._crud.login(loginForm).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success == true) {
            if (res.parameter === "admin") {
              this._router.navigate(['/admin'])
              alert("login successfully")
            } else {
              this._router.navigate(['/user'])
              alert("login successfully")
            }

            localStorage.setItem('isLogin', JSON.stringify(res))
          } else {
            alert("Login Fail")
            return
          }
        },
        (error) => {
          console.log(error);
          alert("login Fail... !")
          return

        }


      )
    }

  }
}