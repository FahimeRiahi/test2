import {Component, OnInit} from '@angular/core';
import {Department} from '../../Models/department';
import {DepartmentService} from '../../services/department.service';
import {faHospital} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  public departments: Department[];
  faHospital = faHospital;

  constructor(protected departmentService: DepartmentService, protected router: Router) {
  }

  ngOnInit() {
    this.departments = this.departmentService.getDepartments() as Department[];

  }

  newDepartment() {
    this.router.navigate(['department']);
  }

  onChange(event: any, item: Department) {
    if (event.target.value === 'Edit') {
      this.router.navigate(['department', item.id]);
    } else {
      this.departmentService.deleteDepartment(item.id);
    }
  }
  public search(searchtext: any) {
   // this.departments =  this.departmentService.search(searchtext.value);
  }

}
