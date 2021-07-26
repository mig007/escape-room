import { Component, OnInit, Renderer2 } from '@angular/core';
import { GlyphService } from '../glyph.service';
import { Glyph } from '../glyph';
import { Router } from '@angular/router';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.less']
})
export class TranslateComponent implements OnInit {

  glyphs: Glyph[] = [];
  glyphsMap: Record<string, Glyph> = {};
  puzzle: Glyph[][] = [];

  constructor(private glyphService: GlyphService, private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {    
    this.getGlyphs();
  }
  getGlyphs() {
    this.glyphService.getGlyphs().subscribe(data => {
      let glyphMap = this.glyphsMap;
      this.glyphs = data;
      data.forEach(function (x) {        
          glyphMap[x.translation] = x;
      });
      //this.shuffle(this.glyphs);

      this.puzzle[0] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.L];
      this.puzzle[1] = [this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.E];
      this.puzzle[2] = [this.glyphsMap.x, this.glyphsMap.L, this.glyphsMap.x, this.glyphsMap.x, this.glyphsMap.H];
      this.puzzle[3] = [this.glyphsMap.N, this.glyphsMap.E, this.glyphsMap.P, this.glyphsMap.H, this.glyphsMap.I];
      this.puzzle[4] = [this.glyphsMap.x, this.glyphsMap.M, this.glyphsMap.x];
      this.puzzle[5] = [this.glyphsMap.x, this.glyphsMap.U, this.glyphsMap.x];
      this.puzzle[6] = [this.glyphsMap.x, this.glyphsMap.E, this.glyphsMap.x];
      this.puzzle[7] = [this.glyphsMap.x, this.glyphsMap.L, this.glyphsMap.A, this.glyphsMap.M, this.glyphsMap.A, this.glyphsMap.N];

      this.puzzle.forEach(function (row) {
        row.forEach(function (col) {
          if (col)
            col.show = true;
        });
      });
      console.log('loaded');
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
    this.glyphs.forEach(function (x) {
      if (!x.show) {

      }
      else if (x && x.input && x.translation) {
        if (x.input.toUpperCase() != x.translation.toUpperCase()) {
          console.log(x, 'no pass');
          solved = false;
          return;         
        }
      }
      else
        solved = false;
    });
    if (solved)
      this.router.navigate(['/video/1']);

  }
  setFocus(id: string) {
    try {
      const element = this.renderer.selectRootElement('#' + id);
      if (element)
        setTimeout(() => {
          element.focus();
          element.select();          

        }, 0);
    }
    catch{ }
    
  }
}