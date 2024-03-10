import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUserComponent } from './account-user.component';

const routes: Routes = [
  { path: '', component: AccountUserComponent },
  // Các đường dẫn con khác của AccountUserComponent (nếu có)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountUserRoutingModule { }
