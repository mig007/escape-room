import { Injectable } from '@angular/core';
import { ScriptureSearch } from './scripture-search';
import { SCRIPTURES } from './mock-scripture';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptureService {

  constructor() { }

  get():Observable<ScriptureSearch[]> {
    return of(SCRIPTURES);
  }
}
