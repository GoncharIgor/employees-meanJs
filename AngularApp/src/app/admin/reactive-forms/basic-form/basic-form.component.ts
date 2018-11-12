import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.less']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;
  carrerOptions = ['junior', 'medium', 'senior'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]],
      age: ['', [
        Validators.min(18),
        Validators.max(65),
      ]],
      message: 'default message',
      career: ''
    });

    this.myForm.valueChanges.subscribe(console.log); // logs every change
  }

  get age() {
    return this.myForm.get('age');
  }
}
