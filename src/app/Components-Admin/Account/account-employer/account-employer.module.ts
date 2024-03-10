import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEmployerComponent } from '../account-employer/account-employer.component';

const routes: Routes = [
  { path: '', component: AccountEmployerComponent },
  // Các đường dẫn con khác của AccountUserComponent (nếu có)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountEmployerModule { }
