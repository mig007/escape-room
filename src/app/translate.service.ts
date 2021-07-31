import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  onTick:any;
  timeEllapsed:number = 0;
  private timerStarted:boolean = false;
  private timer:any = null;
  
  constructor() { 
   

  }
  start(){
    if(!this.timer)
    {
      this.timer = setInterval(() => {
        this.timeEllapsed += 1
        if(this.onTick)
          this.onTick();
      }, 1000)
      
    }
  }
  pause(){
    if(this.timer)
    {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
