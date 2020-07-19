import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Output() addCourse: EventEmitter<any> = new EventEmitter<any>()

  courseName:string;
  description:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const course = {
      courseName: this.courseName,
      description: this.description,
      enrolled: "false"
    }
    this.addCourse.emit(course)
  }

}
