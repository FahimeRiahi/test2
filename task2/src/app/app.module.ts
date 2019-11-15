import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { DepartmentComponent } from './departments/department/department.component';
import { InputsModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ToasterModule,
    FontAwesomeModule,
    DropDownsModule,
    InputsModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
