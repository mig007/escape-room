import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { iif } from 'rxjs';
declare function dacast(videoID:string, divID:string, data:any): any;
  

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})




export class VideoComponent implements OnInit {

  video?: Video;
  isComplete: boolean = false;
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private videoService: VideoService, private ngZone: NgZone) { }
  
  params:any;
  hasListener:boolean = false;
  ngOnInit(): void {
    this.params = this.route.snapshot.paramMap;
    this.getVideo();
    
  }
  ngAfterViewInit(){
    if(this.video)
      this.addDaCastListener(this.video);
    else 
      console.log('no video');
  }
  
  getVideo(): void {
    console.log('load video');
    const id = Number(this.params.get('id'));
    this.videoService.getVideo(id)
      .subscribe(data => { 
      this.isComplete = true;
       this.video = data; 
        //this.addDaCastListener(data);
        //this.addWistiaListener(this);
        this.isLoading = false;
      });    
  }
addDaCastListener(video:Video){
  
  console.log('add da video', video);
 // window.addEventListener("load", () => {
    
   
      console.log('add a cast');
      var myPlayer = dacast(video.fileName, 'myVideo', { 
        width: window.innerWidth, 
        height: window.innerHeight,
        hlsQualities: "0,1,2",
        allow: "autoplay"
      });
      
      myPlayer.on("complete", ()=>{
        this.navigate();
      });
      myPlayer.play();
    

//});
}

  navigate(){
    if(this.video)
      this.router.navigate([this.video.next]);
  }
  addWistiaListener(vm:any) {
    
   
      window._wq = window._wq || [];
      window._wq.push({
        id: vm.video.fileName, onReady: function (data: any) {
          vm.ngZone.run(() => {
          vm.hasListener = true;
          console.log(vm.hasListener, 'has a listener');
          data.bind("end", () => {
            
            vm.isComplete = true;
            vm.ngZone.run(() => {vm.navigate()});
          });
        });
        }
      });  
    
  }

}
