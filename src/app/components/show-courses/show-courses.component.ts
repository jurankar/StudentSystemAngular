import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css']
})
export class ShowCoursesComponent implements OnInit {
  @Input() courses: Course[];

  constructor() { }

  ngOnInit(): void {
  }

}
