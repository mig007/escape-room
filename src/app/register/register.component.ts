import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})



export class RegisterComponent implements OnInit {

  user: User = {email: "", first: "", last: "", phone: ""}
  constructor(private router: Router) { }
  

  ngOnInit(): void {
   
  }
  onStart(): void {
    this.router.navigate(['/trivia']);
    
  }
}
