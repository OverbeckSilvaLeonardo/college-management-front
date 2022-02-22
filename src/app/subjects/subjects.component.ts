import { Component, OnInit } from '@angular/core';
import { SubjectList } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  public data: SubjectList;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSubjects().subscribe((res: SubjectList) => this.data = res);
  }

}
