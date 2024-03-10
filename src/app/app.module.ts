import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/Auth/auth.interceptor';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeAdminComponent } from './Components-Admin/home-admin/home-admin.component';
import { HomeEmployerComponent } from './Components-Employer/home-employer/home-employer.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components-Admin/sidebar/sidebar.component';
import { HeaderAdminComponent } from './Components-Admin/header-admin/header-admin.component';
import { AccountUserComponent } from './Components-Admin/Account/account-user/account-user.component';
import { AccountEmployerComponent } from './Components-Admin/Account/account-employer/account-employer.component';
import { RecruiterManagementComponent } from './Components-Admin/RecruiterManagement/recruiter-management/recruiter-management.component';
import { RoleComponent } from './Components-Admin/RoleManagement/list-role/role.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecentralizationComponent } from './Components-Admin/RoleManagement/decentralization/decentralization.component';
import { CategoryComponent } from './Components-Admin/Categorys/category/category.component';
import { ProvinceComponent } from './Components-Admin/Province/province/province.component';
import { SkillComponent } from './Components-Admin/Skill/skill/skill.component';

@NgModule({
  declarations: [AppComponent,LoginComponent , RegisterComponent, HomeComponent, HomeAdminComponent,HomeEmployerComponent, AboutUsComponent, HeaderComponent, FooterComponent, SidebarComponent, HeaderAdminComponent, AccountUserComponent, AccountEmployerComponent, RecruiterManagementComponent, RoleComponent, DecentralizationComponent, CategoryComponent, ProvinceComponent, SkillComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,BrowserAnimationsModule,
  ToastrModule.forRoot(),],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,

    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
