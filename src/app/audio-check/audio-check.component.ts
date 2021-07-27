import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-audio-check',
  templateUrl: './audio-check.component.html',
  styleUrls: ['./audio-check.component.less']
})
export class AudioCheckComponent implements OnInit {

  @Output() nextPressed: EventEmitter<boolean> =   new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  next(){
    this.nextPressed.emit(true);
  }

}
