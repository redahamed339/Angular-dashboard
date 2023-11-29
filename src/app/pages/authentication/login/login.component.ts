import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { myConstant } from 'src/app/core/constant';
import { apiconstant } from 'src/app/core/constant/apiconstant';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  obj:any={
    email: "admin@localhost.com",
    password: "P@ssword1"
  }

  constructor(private http:HttpClient,private router:Router){

  }

  Login(){
     this.http.post(environment.api+ apiconstant.login.login,this.obj).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      this.router.navigate(['itemtype']);
     });
  }
  Register(){
    this.router.navigateByUrl("/register");
  }
}
