import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiconstant } from 'src/app/core/constant/apiconstant';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  obj={
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: ""
  }
  constructor(private master:HttpClient, private router:Router){

  }
  Register(){
    this.master.post(environment.api+apiconstant.register.register,this.obj).subscribe(res=>{
      this.router.navigateByUrl("/login");
    })
  }
  Login(){
    this.router.navigateByUrl("/login");
  }
}
