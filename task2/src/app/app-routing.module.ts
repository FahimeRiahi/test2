import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartmentListComponent} from './departments/department-list/department-list.component';
import {AppComponent} from './app.component';
import {DepartmentComponent} from './departments/department/department.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: DepartmentListComponent,

      },
      {
        path: 'departments',
        component: DepartmentListComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
      {
        path: 'department/:id',
        component: DepartmentComponent,
      },


    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
