import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/Course';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  courses: Course[];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    //get all courses
    this.updateAllCourses()
  }

  updateAllCourses(){
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      //console.log(this.courses)
    });
  }

  enrolledCourses(){
    this.courseService.getEnrolledCourses().subscribe(enCourses =>{
      this.courses = enCourses;
      //console.log(this.courses)
    });
  }

  addCourse(course){
    this.courseService.addCourseToDB(course).subscribe(retValue =>{
      console.log(retValue);
    });
    this.updateAllCourses();
  }

  findCourseByName(courseName){
    this.courseService.getCourseByName(courseName).subscribe(course =>{
      console.log(course);
      this.courses = course;
    });
  }


}
