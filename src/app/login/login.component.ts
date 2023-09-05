import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  isNewUser:boolean = false;
  loginForm!:FormGroup

 constructor(private fb:FormBuilder,private http:HttpService, private router:Router  ){

 }

 ngOnInit(){
   this.createForm();
 }

 createForm(){
   this.loginForm = this.fb.group({
    email:[''],
    password:['']
   })
 }
 
 login(){
   const endpoint="users?email="+this.loginForm.value.email+"&&password="+this.loginForm.value.password
  this.http.getDataFromServer(endpoint).subscribe(
(el:any)=>{
  if(el&&el.length>0){
this.router.navigate(['/home'])
    this.isNewUser=false
  }
  else{
    this.isNewUser=true

  }

// console.log(el)
}


  )

 }
}
