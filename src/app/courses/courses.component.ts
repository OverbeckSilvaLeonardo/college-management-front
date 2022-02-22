import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CourseList } from '../CourseList.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public data: CourseList;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCourses().subscribe((res: CourseList) => this.data = res);
  }

}
