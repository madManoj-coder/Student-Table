import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IStd } from '../../model/studentInterface';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @ViewChild("fname") fname !: ElementRef; // ViewChild >> it's gives ElementRef
  @ViewChild("lname") lname !: ElementRef;
  @ViewChild("email") email !: ElementRef;
  @ViewChild("contact") contact !: ElementRef;

  @Output() stdData : EventEmitter<IStd> = new EventEmitter<IStd>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddStudent() {
    let obj: IStd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value
    }
    if(!Object.values(obj).includes("")){
      console.log(obj);
      this.stdData.emit(obj)
      this.fname.nativeElement.value = ''
      this.lname.nativeElement.value = ''
      this.email.nativeElement.value = ''
      this.contact.nativeElement.value = ''
    }

  }

}
