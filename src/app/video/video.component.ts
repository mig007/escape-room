import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { iif } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})




export class VideoComponent implements OnInit {

  video?: Video;
  isComplete: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private videoService: VideoService, private ngZone: NgZone) { }
  
  params:any;
  hasListener:boolean = false;
  ngOnInit(): void {
    this.params = this.route.snapshot.paramMap;
    this.getVideo();
    
  }

  getVideo(): void {
    const id = Number(this.params.get('id'));
    this.videoService.getVideo(id)
      .subscribe(data => { 
      this.isComplete = true;
        this.video = data; 
        this.addWistiaListener(this);
      });    
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
