
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { BackgroundBoxComponent } from './components/Background-box/background.component';
import { BoxInitialComponent } from './components/box-initial/box-initial.component';
import { HeaderComponent } from './components/Header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoxInitialComponent,
    BackgroundBoxComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
