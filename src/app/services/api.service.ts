import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseList } from '../CourseList.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = 'http://localhost:49917/api';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseList> {
    return this.http.get<CourseList>(`${this.url}/courses`);
  }
}
