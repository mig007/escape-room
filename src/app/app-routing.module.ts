import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { TranslateComponent } from './translate/translate.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trivia', component: TriviaComponent, data: { tite: 'Trivia Game' } },
  { path: 'video/:id', component: VideoComponent },
  { path: 'translate', component: TranslateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
