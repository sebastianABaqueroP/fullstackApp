import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { UserListComponent } from './users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
