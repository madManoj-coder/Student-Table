import { Component, Input, OnInit } from '@angular/core';
import { IStd } from '../../model/studentInterface';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() studentArr !: IStd[]

  constructor() { }

  ngOnInit(): void {
  }

}
