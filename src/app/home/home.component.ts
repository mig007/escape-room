import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  view:string = "welcome";
  registration:Registration = {email: '', teamName: '', teamType: null}
  constructor() { }

  ngOnInit(): void {
  }

  changeView(viewName:string){
    this.view = viewName;
  }
}
