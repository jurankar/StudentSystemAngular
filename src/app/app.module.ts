import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { GetCoursesComponent } from './components/get-courses/get-courses.component';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseComponent } from './components/course/course.component';
import { SpecificCourseComponent } from './components/specific-course/specific-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AddCourseComponent,
    GetCoursesComponent,
    ShowCoursesComponent,
    CourseComponent,
    SpecificCourseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
