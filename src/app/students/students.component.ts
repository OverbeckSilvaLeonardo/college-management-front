import { Component, OnInit } from '@angular/core';
import { GetStudentList } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public data: GetStudentList;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getStudents().subscribe((res: GetStudentList) => {
      this.data = res;
      console.log(this.data);
    });
  }

}
