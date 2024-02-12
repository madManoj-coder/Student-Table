import { Component, OnInit } from '@angular/core';
import { IStd } from './shared/model/studentInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'directive';

  constructor(){

  }

  ngOnInit(): void {
    
  }
  
  stdArr: Array<IStd> = [
    {
      fname: " Jhon",
      lname: "Doe",
      email: "jd@gmail.com",
      contact: 123445566
    }
  ]

  getStdData(stdObj: IStd) {
    console.log(stdObj);
    this.stdArr.push(stdObj)
  }
}
