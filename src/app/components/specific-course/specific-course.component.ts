import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-specific-course',
  templateUrl: './specific-course.component.html',
  styleUrls: ['./specific-course.component.css']
})
export class SpecificCourseComponent implements OnInit {
  @Output() searchCourse: EventEmitter<any> = new EventEmitter<any>()

  courseName:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.searchCourse.emit(this.courseName)
  }

}
