import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SYMBOLS } from './mock-glyph'
import { Glyph } from './glyph';
@Injectable({
  providedIn: 'root'
})
export class GlyphService {

  constructor() { }

  getGlyphs(): Observable<Glyph[]> {
    const retval = of(SYMBOLS);
    return retval;
  }
}
