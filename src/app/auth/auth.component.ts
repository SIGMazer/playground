// auth.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLogin?: boolean = true;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }
  onLoginSubmit(){
    console.log("login");
  }
  onRegisterSubmit(){
    console.log("register");
  }
  toggleForm(){
    this.isLogin = !this.isLogin;
  }
  isFieldInvalid(fieldName: string, login: boolean): boolean {
    if(login){
      const control = this.loginForm.get(fieldName);
      if(control == null){
        return false;
      }
      return control.invalid && control.touched;
    }
    else{
      const control = this.registerForm.get(fieldName);
      if(control == null){
        return false;
      }
      return control.invalid && control.touched;
    }
  }

}

