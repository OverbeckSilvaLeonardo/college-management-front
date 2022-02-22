import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseList, GetStudentList, SubjectList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = 'http://localhost:49917/api';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseList> {
    return this.http.get<CourseList>(`${this.url}/courses`);
  }

  getSubjects(): Observable<SubjectList> {
    return this.http.get<SubjectList>(`${this.url}/subjects`);
  }

  getStudents(): Observable<GetStudentList> {
    return this.http.get<GetStudentList>(`${this.url}/students`);
  }
}
