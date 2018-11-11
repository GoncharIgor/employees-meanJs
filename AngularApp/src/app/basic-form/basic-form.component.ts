import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      email: '',
      message: 'default message',
      career: ''
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

}
