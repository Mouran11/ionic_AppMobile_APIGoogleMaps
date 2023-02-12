import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent,HomePage, LoginPage, SignupPage],
  entryComponents: [HomePage, LoginPage, SignupPage],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Camera,
    // ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
