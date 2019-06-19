import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-demo-form-with-events",
  templateUrl: "./demo-form-with-events.component.html",
  styleUrls: ["./demo-form-with-events.component.css"]
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  ngOnInit() {}

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ["", Validators.required]
    });

    this.sku = this.myForm.controls["sku"];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log("sku changed to:", value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log("form changed to:", form);
    });
  }
}
