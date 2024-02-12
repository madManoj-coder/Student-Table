import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
