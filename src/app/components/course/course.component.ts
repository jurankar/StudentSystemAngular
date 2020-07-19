import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';

import {Course} from '../../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course:Course;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }

  enroll(course){
    //console.log("course component enroll component")
    this.courseService.enrollToCourse(course).subscribe(status =>{
      console.log(status);
    });
  }

  cancelEnrollement(course) {
    this.courseService.cancelEnrollementToCourse(course).subscribe(status =>{
      console.log(status);
    });;
  }



}
