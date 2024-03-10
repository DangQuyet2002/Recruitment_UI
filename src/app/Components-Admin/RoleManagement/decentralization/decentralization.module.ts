import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecentralizationComponent } from './decentralization.component';

const routes: Routes = [
  { path: '', component: DecentralizationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecentralizationModule { }
