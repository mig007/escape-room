import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { VideoComponent } from './video/video.component';
import { TranslateComponent } from './translate/translate.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SafePipe } from './safe.pipe';
import { AudioCheckComponent } from './audio-check/audio-check.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BonusQuestionComponent } from './bonus-question/bonus-question.component';
import { BaseComponent } from './base/base.component';
import { BackgroundContainerComponent } from './background-container/background-container.component';
import { GoAndDoComponent } from './go-and-do/go-and-do.component';
import { ScriptureSearchComponent } from './scripture-search/scripture-search.component';
@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    HomeComponent,
    RegisterComponent,
    VideoComponent,
    TranslateComponent,
    FilterPipe,
    LoginComponent,
    MapComponent,
    SafePipe,
    AudioCheckComponent,
    WelcomeComponent,
    BonusQuestionComponent,
    BaseComponent,
    BackgroundContainerComponent,
    GoAndDoComponent,
    ScriptureSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//extend window to include wistiaInit
declare global {
  interface Window {
    _wq: any;
  }
}
