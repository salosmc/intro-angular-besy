import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWelcomeComponent } from './login-welcome/login-welcome.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginWelcomeComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
