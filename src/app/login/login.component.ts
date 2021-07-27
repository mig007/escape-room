import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
 
  
  constructor(private router: Router) { }

  user: string = '';
  password: string = '';
  showHint: boolean = false;
  
  ngOnInit(): void {
  }

  login() {
    let success = true;
    console.log(this.user, this.password);
    if (this.user.toLowerCase() != "mig007")
      success = false;
    if (this.password != "password")
      success = false;

    if (!success)
      alert('Invalid user name or password')
    else
      this.router.navigate(['/video/2']);

  }

}
