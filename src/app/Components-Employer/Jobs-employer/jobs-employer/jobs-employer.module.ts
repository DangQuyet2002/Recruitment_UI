import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsEmployerComponent } from './jobs-employer.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: JobsEmployerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class JobsEmployerModule { }
