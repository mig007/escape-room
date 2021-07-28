import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-bonus-question',
  templateUrl: './bonus-question.component.html',
  styleUrls: ['./bonus-question.component.less']
})
export class BonusQuestionComponent extends BaseComponent implements OnInit {

  
  constructor(public renderer: Renderer2, public router:Router, private elementRef: ElementRef) {
    super(renderer, router);
  }

  TIME_OUT: number = 3000;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.startGame();
    }, this.TIME_OUT)
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'red';
  }
  startGame() {
    this.router.navigate(['/video/0']);
  }
}
