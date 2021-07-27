import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { Registration } from '../registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})



export class RegisterComponent implements OnInit {

  @Input() registration!: Registration;
  
  constructor(private router: Router) { }
  

  ngOnInit(): void {
   
  }
  onStart(): void {
    this.router.navigate(['/trivia/0']);
    
  }
}
