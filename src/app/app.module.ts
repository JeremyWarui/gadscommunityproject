import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './school-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HomeComponent } from './homepage/home/home.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { MyCoursesListComponent } from './myCourses/my-courses-list/my-courses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoursesListComponent,
    MyCoursesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
