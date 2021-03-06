import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { TranslateComponent } from './translate/translate.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { BonusQuestionComponent } from './bonus-question/bonus-question.component';
import { GoAndDoComponent } from './go-and-do/go-and-do.component';
import { ScriptureSearchComponent } from './scripture-search/scripture-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trivia/:id', component: TriviaComponent, data: { tite: 'Trivia Game' } },
  { path: 'video/:id', component: VideoComponent },
  { path: 'translate', component: TranslateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'bonus', component: BonusQuestionComponent },
  { path: 'go-and-do', component: GoAndDoComponent },
  { path: 'scripture-search', component: ScriptureSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
