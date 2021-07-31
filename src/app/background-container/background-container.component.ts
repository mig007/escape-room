import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-container',
  templateUrl: './background-container.component.html',
  styleUrls: ['./background-container.component.less']
})
export class BackgroundContainerComponent implements OnInit {

  
  constructor() { }
  @Input() color:string = "#FFFFFF";
  @Input() image:string = "";
  ngOnInit(): void {
  }

}
