import {Injectable} from '@angular/core';
import {Department} from '../Models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public departments: Array<Department> = [
    {
      id: 1,
      departmentInfo:
        {
          name: 'Oncology',
          apiKey: '12345io'
        },
      departmentContactPerson:
        {
          name: 'Fahime',
          email: 'fahime@gmail.com',
          phone: '09369581327'
        }
    }
  ];

  constructor() {
  }

  public getDepartments() {
    return this.departments;
  }

  public getDepartmentById(id: any) {
    return this.departments.find(x => x.id === id);
  }

  public addDepartment(department: Department) {
    this.departments.push(department as Department);
  }

  public editDepartment(department: Department) {
    const updateItem = this.departments.find(this.findIndexToUpdate, department.id);

    const index = this.departments.indexOf(updateItem);

    this.departments[index] = department;

  }

  public deleteDepartment(key: number) {
    const index = this.departments.findIndex(d => d.id === key);
    if (index > -1) {
      this.departments.splice(index, 1);
    }
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  search(searchText: string) {
    return this.departments.filter(x => x.departmentInfo.name === searchText || x.departmentInfo.apiKey === searchText || x.departmentContactPerson.name === searchText || x.departmentContactPerson.phone === searchText || x.departmentContactPerson.email === searchText);
  }

}
