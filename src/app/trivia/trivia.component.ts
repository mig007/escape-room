import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Trivia } from '../trivia';
import { TriviaService } from '../trivia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Letter } from '../letter';
import { iif } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.less']
})
export class TriviaComponent extends BaseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private triviaService: TriviaService, public router: Router, public renderer: Renderer2, private elementRef: ElementRef) {
    super(renderer, router);
  }
  
  selectedTrivia?: Trivia;
  trivia: Trivia[] = [];
  triviaIdx: number = 0;
  response: string[] = [];
  letter?: string = '';
  answer: Letter[] = [];

  ngOnInit(): void {
    
    this.triviaIdx =  parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getTrivia();
    this.selectTrivia(this.triviaIdx);
    
  }
 
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'red';
  }
  ngDestroy()
  {
    this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'white';
  }
 
  getTrivia(): void {
    this.triviaService.getTrivia().subscribe(x => this.trivia = x);
  }

  selectTrivia(idx: number): void {    
    if (this.trivia && this.trivia.length > idx)
    {
      this.selectedTrivia = this.trivia[idx];
      this.answer = this.getArray(this.selectedTrivia.answer);
      this.setFocus('boxLetter');
    }
    else
    {
      this.selectedTrivia = undefined;
      this.answer = [];
    }
  }

  getArray(str:string): Letter[]
  {
    let array = Array.from(str);
    let retval:Letter[] = [];
    array.forEach(function(x){
      retval.push({letter: x})
    });
    return retval;
  }
  checkLetter()
  {
    setTimeout(() => {
            this.wait();   

    }, 0);
  }
  wait()
  {
    if(this.letter == ' ')
      this.letter = '';
    if(this.letter)
    {
      
      let complete = true;
      let letter = this.letter;
      let found = null;
      this.answer.forEach(function(x){
        if(x.letter.toUpperCase() == letter.toUpperCase())
                found = !x.visible;
          if(!x.letter || x.letter == ' ' || x.letter.toUpperCase() == letter.toUpperCase())
          {
              x.visible = true;
          }
          if(!x.visible)
            complete = false;
      });
      
      this.letter = ''; 
      if(found === null)
      {
        alert(`there are no ${letter}'s`);
      }
      else if(found === false)
      {
        alert(`you've already selected ${letter}`);
      }
      if(complete && this.selectedTrivia)
      {
        this.displayMessage(this.selectedTrivia.correct);
        if (this.trivia.length > this.triviaIdx + 1) {
          this.triviaIdx++;
          this.selectTrivia(this.triviaIdx);
        }
        else {
          this.router.navigate(['/bonus']);
        }
      }
    }
  }
  

  displayMessage(message: string) {
    alert(message);
  }
}
