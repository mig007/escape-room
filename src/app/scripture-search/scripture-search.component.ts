import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptureSearch } from '../scripture-search';
import { ScriptureService } from '../scripture.service';
import { LetterService } from '../letter.service';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { BOOKS } from '../mock-books';
import { Book } from '../book';

@Component({
  selector: 'app-scripture-search',
  templateUrl: './scripture-search.component.html',
  styleUrls: ['./scripture-search.component.less']
})
export class ScriptureSearchComponent extends BaseComponent implements OnInit {

  constructor(private scriptureService: ScriptureService, private letterService: LetterService, renderer: Renderer2, router: Router) {
    super(renderer, router);
  }

  scriptures: ScriptureSearch[] = [];
  books: string[] = BOOKS;
  allFound: boolean = false;
  book1: Book = { response: null, answer: "1 Nephi" };
  book2: Book = { response: null, answer: "Joseph Smith History" };
  book3: Book = { response: null, answer: "Luke" };
  book4: Book = { response: null, answer: "Exodus" };
  book5: Book = { response: null, answer: "Mosiah" };
  book6: Book = { response: null, answer: "1 Kings" };
  six_books: (Book)[] = [this.book1, this.book2, this.book3, this.book4, this.book5, this.book6];




  ngOnInit(): void {
    this.load();

  }

  load() {
    this.scriptureService.get().subscribe(data => {
      this.scriptures = data;
      this.scriptures.forEach((x) => {
        x.answer = this.letterService.getArray(x.word);
      });
      this.setFocus('box-0-0');
    });
  }
  letterInput(refIdx: number, letterIdx: number) {

    var answer = this.scriptures[refIdx].answer;
    if (answer) {
      let correct: boolean | null = true;
      answer.forEach((x) => {
        if (!x.answer) {
          correct = null;
        }
        else if (correct && x.letter.toUpperCase() != x.answer.toUpperCase()) {
          correct = false;
        }
      });

      this.scriptures[refIdx].isFound = correct;


      //go to the next letter
      if (letterIdx + 1 < answer.length) {
        letterIdx++;
      }
      //go to the start of the next row
      else {
        if (refIdx + 1 < this.scriptures.length)
          refIdx++;
        else
          refIdx = 0;
        letterIdx = 0;
      }
      this.setFocus('box-' + refIdx + '-' + letterIdx);

      let allFound = true;
      this.scriptures.forEach((x) => {
        if (!x.isFound)
          allFound = false;
      });
      if (allFound)
        this.allFound = true;

    }
  }
  checkBooks() {
    let correct = true;
    this.six_books.forEach(book => {
      if (book.response != book.answer)
        correct = false;
    });
    if (correct)
      alert('you got it');
    else
      alert('try again');
  }
}



