import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeAdminComponent } from './Components-Admin/home-admin/home-admin.component';
import { HomeEmployerComponent } from './Components-Employer/home-employer/home-employer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { RecruiterManagementComponent } from './Components-Admin/RecruiterManagement/recruiter-management/recruiter-management.component';
import { JobsEmployerComponent } from './Components-Employer/Jobs-employer/jobs-employer/jobs-employer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },




  //Employer
  { path: 'home-employer',
    component: HomeEmployerComponent,
    children: [
      {
        path: 'list-user-apply',
        loadChildren: () => import('./Components-Employer/apply-employer/apply-employer/apply-employer.module').then((m) => m.ApplyModule),
      },
      {
        path: 'list-jobs',
        loadChildren: () => import('./Components-Employer/Jobs-employer/jobs-employer/jobs-employer.module').then((m) => m.JobsEmployerModule),
      },
    ]
   },

  { path: '', component: HomeComponent },

  //Admin
  {
    path: 'home-admin',
    component: HomeAdminComponent,
    children: [
      {
        path: 'list-user',
        loadChildren: () => import('./Components-Admin/Account/account-user/account-user.module').then((m) => m.AccountUserRoutingModule),
      },
      {
        path: 'list-employer',
        loadChildren: () => import('./Components-Admin/Account/account-employer/account-employer.module').then((m) => m.AccountEmployerModule),
      },
      {
        path: 'recruiter-management',
        loadChildren: () => import('./Components-Admin/RecruiterManagement/recruiter-management/recruiter-management.module').then((m) => m.RecruiterManagementModule),
      },
      {
        path: 'list-role',
        loadChildren: () => import('./Components-Admin/RoleManagement/list-role/role.module').then((m) => m.RoleModule),
      },
      {
        path: 'list-decentralization',
        loadChildren: () => import('./Components-Admin/RoleManagement/decentralization/decentralization.module').then((m) => m.DecentralizationModule),
      },
      {
        path: 'list-category',
        loadChildren: () => import('./Components-Admin/Categorys/category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'list-province',
        loadChildren: () => import('./Components-Admin/Province/province/province.module').then((m) => m.ProvinceModule),
      },
      {
        path: 'list-skill',
        loadChildren: () => import('./Components-Admin/Skill/skill/skill.module').then((m) => m.SkillModule),
      },
      {
        path: 'list-title',
        loadChildren: () => import('./Components-Admin/Titles/title/title.module').then((m) => m.TitleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
