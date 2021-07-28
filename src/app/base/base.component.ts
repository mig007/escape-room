import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: ``,
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {

  //to inherit the base components
  //1. add "extends BaseComponent" to the class definition of the component that you want to inherit BaseComponent on
  //2. add public renderer: Renderer2, public router:Router to the constructor
  //3. add super(renderer, router); as the constructor implementation between {};
  constructor(public renderer: Renderer2, public router: Router) { }

  ngOnInit(): void {
  }


  setFocus(id: string) {
    console.log('setfocus', id);
  
      
        setTimeout(() => {
          const element = this.renderer.selectRootElement('#' + id, true);
          if (element) {
            element.focus();
            element.select();
          }
        }, 0);
    
  }

}
