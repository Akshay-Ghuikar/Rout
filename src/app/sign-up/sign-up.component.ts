import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      name: [''],
      mobileNo: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    console.log(this.signUpForm.value);
    this.http.postDataServer('users', this.signUpForm.value)
    .subscribe(
      (el:any) => {
        console.log("post data ",el)
        
      },
      () => {},
      () => {} 
    );
  }
}
