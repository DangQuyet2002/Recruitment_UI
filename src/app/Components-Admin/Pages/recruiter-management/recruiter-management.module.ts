import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterManagementComponent } from './recruiter-management.component';

const routes: Routes = [
  { path: '', component: RecruiterManagementComponent },
  // Các đường dẫn con khác của AccountUserComponent (nếu có)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterManagementModule { }
