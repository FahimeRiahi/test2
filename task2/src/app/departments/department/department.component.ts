import {Component, OnInit} from '@angular/core';
import {Department, DepartmentContactPerson, DepartmentInfo} from '../../Models/department'
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departmentContactPerson: DepartmentContactPerson = {name: '', email: '', phone: ''};
  departmentInfo: DepartmentInfo = {apiKey: '', name: ''};
  index: number;
  id: any;
  private sub: any;
  department: Department;

  constructor(protected departmentService: DepartmentService, protected router: Router, private route: ActivatedRoute,
  ) {
  }


  ngOnInit() {
    debugger;
    this.index = this.departmentService.getDepartments().length;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.department = this.departmentService.getDepartmentById(this.id);
    this.departmentContactPerson = this.department.departmentContactPerson;
    this.departmentInfo = this.department.departmentInfo;
  }

  saveDepartment() {
    if (this.id) {
      this.departmentService.editDepartment(this.department);
    } else {
      this.index = this.index + 1;

      this.departmentService.addDepartment({
        id: this.index,
        departmentInfo: this.departmentInfo,
        departmentContactPerson: this.departmentContactPerson
      });
    }
    this.back();
  }

  back() {
    this.router.navigate(['departments']);

  }


}
