import { Component, OnInit, Renderer2 } from '@angular/core';
import { GlyphService } from '../glyph.service';
import { Glyph } from '../glyph';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '../translate.service';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.less']
})
export class TranslateComponent extends BaseComponent  implements OnInit {

  glyphs: Glyph[] = [];
  keyGlyphs: Glyph[] = [];
  glyphsMap: Record<string, Glyph> = {};
  puzzle: Glyph[][] = [];

  constructor(private glyphService: GlyphService, router: Router, renderer:Renderer2, public translateService:TranslateService) { 
    super(renderer, router);
    
  }

  ngOnInit(): void {    
    
    this.getGlyphs();
    this.translateService.start();
    
  }
  
  getGlyphs() {
    
    this.glyphService.getGlyphs().subscribe(data => {
      let glyphMap = this.glyphsMap;
      this.glyphs = data;
      data.forEach(function (x) {        
          glyphMap[x.translation] = x;
      });
      

      this.puzzle[0] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.N, this.glyphsMap.x];
      this.puzzle[1] = [this.glyphsMap.x, this.glyphsMap.L, this.glyphsMap.E, this.glyphsMap.M, this.glyphsMap.U, this.glyphsMap.E, this.glyphsMap.L];
      this.puzzle[2] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.P, this.glyphsMap.x, this.glyphsMap.L];
      this.puzzle[3] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.H, this.glyphsMap.x, this.glyphsMap.E];
      this.puzzle[4] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.S, this.glyphsMap.A, this.glyphsMap.R, this.glyphsMap.I, this.glyphsMap.A, this.glyphsMap.H];
      this.puzzle[5] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.A, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.I];
      this.puzzle[6] = [this.glyphsMap.L, this.glyphsMap.A, this.glyphsMap.M, this.glyphsMap.A, this.glyphsMap.N];
      
      
      this.puzzle.forEach((row) => {
        row.forEach((col) => {
          if (col && this.keyGlyphs.indexOf(col) === -1)
          {            
            this.keyGlyphs.push(col);
            //col.show = true;
          }
        });
      });
      
    }
    );
  }

  shuffle(array:any[]) {
  var currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

  checkPuzzle() {
    var solved = true;
    this.translateService.pause();
    
    this.keyGlyphs.forEach((x) => {
      if (x && x.input && x.translation) {
        if (x.input.toUpperCase() != x.translation.toUpperCase()) {
          
          solved = false;
          return;         
        }
      }
      else
        solved = false;
    });
    if (solved)
      this.router.navigate(['/video/1']);
    else
      this.router.navigate(['/video/3']);

  }
}
