import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Video } from './video';
import { VIDEOS } from './mock-video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  getVideo(id: number): Observable<Video> {    
    const video = VIDEOS.find(x => x.id === id)!;    
    return of(video);
  }

}
