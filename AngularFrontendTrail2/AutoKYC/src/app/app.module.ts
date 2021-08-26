import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaddetailsComponent } from './uploaddetails/uploaddetails.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaddetailsComponent,
    HomeComponent,
    RegisterComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
