import { Component, OnInit } from '@angular/core';
import { MapCoordinate } from '../map-coordinate';
import { COORDINATES } from '../mock-coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  constructor() { }
  coordiates:MapCoordinate[] = COORDINATES;
  path:MapCoordinate[]=[];
  ngOnInit(): void {
  }
  select(coor:MapCoordinate):void{
    if(!coor.selected)
    {
      if(this.path.length < 6)
      {
        coor.selected = true;
        this.path.push(coor);
      }
    }
    else
    {
      this.remove(this.path, coor);
    }
  }
  clearAll():void{
    while(this.path.length)
    {
      this.remove(this.path, this.path[0]);
    }
  }
  remove(array:MapCoordinate[], coor:MapCoordinate):void {
    const index = array.indexOf(coor);
    if(index !== -1)
    {
      coor.selected = false;
      array.splice(index, 1);
    }
  }
  getPath():string{
    let retval = "M";
    this.path.forEach(x => {
      retval += ' ' + x.x + ' ' + x.y
    });
    return retval;
  }
  submit(){
    let correct = true;
    this.path.forEach((x,idx) =>{
      if(x.answerKey !== null && x.answerKey !== idx)
        correct = false;
    })
    if(correct)
      alert('got it');
    else
      alert('nope');
  }

}
