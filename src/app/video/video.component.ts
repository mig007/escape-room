import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})




export class VideoComponent implements OnInit {

  video?: Video;

  constructor(private route: ActivatedRoute, private router: Router, private videoService: VideoService, private ngZone: NgZone) { }
  
  params:any;
  ngOnInit(): void {
    this. params = this.route.snapshot.paramMap;
    this.getVideo();
    
  }

  getVideo(): void {
    const id = Number(this.params.get('id'));
    this.videoService.getVideo(id)
      .subscribe(data => { this.video = data; this.addWistiaListener(this.video); });    
  }

  addWistiaListener(video:Video) {    
      let r = this.router;      
      let zone = this.ngZone;
      window._wq = window._wq || [];
      window._wq.push({
        id: this.video?.fileName, onReady: function (data: any) {
          video.wAPI = data;
          data.bind("end", function () {
            zone.run(() => {r.navigate([video.next])});
          });
        }
      });    
  }

}
