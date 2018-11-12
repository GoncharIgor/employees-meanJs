import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private location: Location,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }

  get login() {
    return this.loginForm.get('age');
  }

  get password() {
    return this.loginForm.get('password');
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    console.log('Logged in');
  }
}
