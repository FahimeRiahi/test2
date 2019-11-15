export class Department {
  id: number;
  departmentInfo: DepartmentInfo;
  departmentContactPerson: DepartmentContactPerson;
}

export class DepartmentInfo {
  name: string;
  apiKey: string;
}

export class DepartmentContactPerson {
  name: string;
  email: string;
  phone: string;
}
