import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form-example';

  genders = ['male', 'female']

  constructor(){}

  ngOnInit(): void {
    
  }

  loginForm = new FormGroup({
    email :new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    gender: new FormControl('')
  });

  login() {
    console.log('submitted');
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }
}
