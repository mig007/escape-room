import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent extends BaseComponent implements OnInit {


  constructor(public renderer: Renderer2, public router: Router) {
    super(renderer, router);

  }
  USER_NAME: string = 'frankgordon';
  userText: string = 'Username:';
  user: string = '';
  showHint: boolean = false;


  PASSWORD: string = 'baptisim';
  passwordText: string = 'Password:';
  password: string = '';
  showPassword: boolean = false;
  showPasswordHint: boolean = false;


  SECUIRTY_ANSWER: string = 'go forth with faith'
  questionText: string = 'Security Question';
  secuirtyQuestion: string = '';
  showQuestion: boolean = false;
  showQuestionHint: boolean = false;





  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    this.setFocus('boxUser');
  }
  submit() {
    if (this.user.toLowerCase() == this.USER_NAME.toLowerCase()) {
      this.setFocus('boxPassword');
      this.showPassword = true;
    }
    else {
      this.user = '';
      this.userText = 'Invalid Username: Try Again';
    }
  }
  login() {

    if (this.password.toLowerCase() == this.PASSWORD.toLowerCase()) {
      this.showQuestion = true;
      this.setFocus('boxQuestion')

    }
    else {
      this.password = '';
      this.passwordText = 'Invalid Password: Try Again';
    }
  }
  question() {
    if (this.secuirtyQuestion == this.SECUIRTY_ANSWER) {
      this.router.navigate(['/video/5']);
    }
    else {
      this.secuirtyQuestion = '';
      this.questionText = 'Incorect Response: Try Again';
    }

  }
  

}
