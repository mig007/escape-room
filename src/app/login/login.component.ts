import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent extends BaseComponent implements OnInit {
 
  
  constructor(public renderer: Renderer2, public router:Router) {
    super(renderer, router);

   }
  USER_NAME: string = 'frankgordon';
  PASSWORD: string = 'baptisim';
  user: string = '';
  password: string = '';
  showHint: boolean = false;
  showPassword: boolean = false;
  invalidUser: boolean = false;
  userText:string = 'Username:';
  passwordText:string ='Password:';
  ngOnInit(): void {
    this.setFocus('boxUser');
  }
submit(){
  
  if (this.user.toLowerCase() == this.USER_NAME.toLowerCase())
  {
    this.setFocus('boxPassword');
    this.showPassword = true;
  }
  else
  {
    this.user = '';
    this.userText = 'Invalid Username: Try Again';
  }
}
  login() {
    
    if (this.password.toLowerCase()  == this.PASSWORD.toLowerCase() )
    {
      this.router.navigate(['/video/2']);
    }
    else
    {
      this.password = '';
      this.passwordText = 'Invalid Password: Try Again';
    }
  }

}
