import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseService} from '../../services/course.service';

import {Course} from '../../models/Course';

@Component({
  selector: 'app-get-courses',
  templateUrl: './get-courses.component.html',
  styleUrls: ['./get-courses.component.css']
})
export class GetCoursesComponent implements OnInit {
  @Output() showAllCourses: EventEmitter<any> = new EventEmitter<any>();
  @Output() showEnrolledCOurses: EventEmitter<any> = new EventEmitter<any>();

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }

  allCourses(): void{
    this.showAllCourses.emit()
  }

  enrolledCourses(): void{
    this.showEnrolledCOurses.emit()

  }

}
