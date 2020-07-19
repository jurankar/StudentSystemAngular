import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Course} from '../models/Course';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl:string = 'http://localhost:8080/api/v1/course/';

  constructor(private http: HttpClient) { }

  // Get All Courses
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

  //get enrolled courses
  getEnrolledCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}/enrolled`)
  }

  //enroll to course
  enrollToCourse(course): Observable<any>{
    //console.log("service_enroll_course")
    var put = this.http.put<any>(`${this.apiUrl}/${course.courseName}/enroll`, {});
    console.log(put);
    return put;
  }

  cancelEnrollementToCourse(course): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${course.courseName}/cancel_enroll`,{});
  }

  addCourseToDB(course: Course): Observable<any>{
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, course, httpOptions);
  }

  //get course by name
  getCourseByName(courseName): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}/name/${courseName}`)
  }
}
