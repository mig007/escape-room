import { Injectable } from '@angular/core';
import { TRIVIA_QUESTIONS } from './mock-trivia'
import { Trivia } from './trivia';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor() { }

  getTrivia(): Observable<Trivia[]> {
    const trivia = of(TRIVIA_QUESTIONS);
    return trivia;
  }
}
