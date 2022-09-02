import { UserService } from './components/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BoxInitialComponent } from './components/box-initial/box-initial.component';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.routes';
import { AuthGuard } from './core/auth.guard';
import { UserResolver } from './components/user/user.resolver';
import { ApiService } from './core/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxInitialComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, UserService, UserResolver, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
