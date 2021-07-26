import { Component, OnInit } from '@angular/core';
import { Trivia } from '../trivia';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.less']
})
export class TriviaComponent implements OnInit {

  constructor(private triviaService: TriviaService, private router: Router) { }
  
  selectedTrivia?: Trivia;
  trivia: Trivia[] = [];
  triviaIdx: number = 0;
  response: string = '';

  

  ngOnInit(): void {    
    this.getTrivia();
    this.selectTrivia(this.triviaIdx);
    
  }

 
  getTrivia(): void {
    this.triviaService.getTrivia().subscribe(x => this.trivia = x);
  }

  selectTrivia(idx: number): void {    
    if (this.trivia && this.trivia.length > idx)
      this.selectedTrivia = this.trivia[idx];
    else
      this.selectedTrivia = undefined;
  }

  onSubmit() {

    if (this.selectedTrivia != null) {
      if (this.response.toLowerCase() == this.selectedTrivia.answer.toLowerCase()) {
        this.displayMessage(this.selectedTrivia.correct);
        if (this.trivia.length > this.triviaIdx + 1) {
          this.triviaIdx++;
          this.selectTrivia(this.triviaIdx);
        }
        else {
          this.router.navigate(['/video/0']);
        }
      }
      else {
        this.displayMessage(`try again\nhint: ${this.selectedTrivia.hint}`);
      }
      this.response = '';
    }
  }

  displayMessage(message: string) {
    alert(message);
  }
}
