import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-shorthand',
  templateUrl: './demo-form-with-validations-shorthand.component.html',
  styleUrls: ['./demo-form-with-validations-shorthand.component.css']
})
export class DemoFormWithValidationsShorthandComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });
  }

  onSubmit(value: any): void {
    console.log('you submitted value:', value.sku);
  }

}
