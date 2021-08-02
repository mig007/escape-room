import { Injectable } from '@angular/core';
import { Letter } from './letter';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  constructor() { }

  getArray(str: string): Letter[] {
    let array = Array.from(str);
    let retval: Letter[] = [];
    array.forEach(function (x) {
      retval.push({ letter: x })
    });
    return retval;
  }
}
