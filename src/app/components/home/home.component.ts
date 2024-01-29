import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  takeValue: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.takeValue = formBuilder.group({
    email: ['', Validators.required],
    text: ['', Validators.required]
    });
   }
  send(): void {
    alert(JSON.stringify(this.takeValue.value));
  }
}
