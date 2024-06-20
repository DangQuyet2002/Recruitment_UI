import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/Auth/auth.interceptor';
import { HomeComponent } from './Components/Pages/home/home.component';
import { LoginComponent } from './Components/Layout/login/login.component';
import { RegisterComponent } from './Components/Layout/register/register.component';
import { HomeAdminComponent } from './Components-Admin/Pages/home-admin/home-admin.component';
import { HomeEmployerComponent } from './Components-Employer/home-employer/home-employer.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { SidebarComponent } from './Components-Admin/Layout/sidebar/sidebar.component';
import { HeaderAdminComponent } from './Components-Admin/Layout/header-admin/header-admin.component';
import { AccountUserComponent } from './Components-Admin/Account/account-user/account-user.component';
import { AccountEmployerComponent } from './Components-Admin/Account/account-employer/account-employer.component';
import { RecruiterManagementComponent } from './Components-Admin/Pages/recruiter-management/recruiter-management.component';
import { RoleComponent } from './Components-Admin/Pages/list-role/role.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecentralizationComponent } from './Components-Admin/Pages/decentralization/decentralization.component';
import { CategoryComponent } from './Components-Admin/Pages/category/category.component';
import { ProvinceComponent } from './Components-Admin/Pages/province/province.component';
import { SkillComponent } from './Components-Admin/Pages/skill/skill.component';
import { TitleComponent } from './Components-Admin/Pages/title/title.component';
import { HeaderEmployerComponent } from './Components-Employer/header-employer/header-employer.component';
import { SidebarEmployerComponent } from './Components-Employer/sidebar-employer/sidebar-employer.component';
import { ApplyEmployerComponent } from './Components-Employer/apply-employer/apply-employer/apply-employer.component';
import { JobsEmployerComponent } from './Components-Employer/Jobs-employer/jobs-employer/jobs-employer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TruncateTextPipe } from './truncate-text.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from './Components/Pages/detail/detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProfileUserComponent } from './Components/Pages/profile-user/profile-user.component';
import { CvsComponent } from './Components/Pages/CV/cvs/cvs.component';
import { TemplateCvComponent } from './Components/Pages/CV/template-cv/template-cv.component';
import { TemplateComponent } from './Components-Admin/Pages/template/template.component';

@NgModule({
  declarations: [AppComponent,
    LoginComponent ,
    RegisterComponent,
    HomeComponent,
    HomeAdminComponent,
    HomeEmployerComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeaderAdminComponent,
    AccountUserComponent,
    AccountEmployerComponent,
    RecruiterManagementComponent,
    RoleComponent,
    DecentralizationComponent,
    CategoryComponent,
    ProvinceComponent,
    SkillComponent,
    TitleComponent,
    HeaderEmployerComponent,
    SidebarEmployerComponent,
    ApplyEmployerComponent,
    JobsEmployerComponent,
    TruncateTextPipe,
    ProfileUserComponent,
    CvsComponent,
    TemplateCvComponent,
    TemplateComponent,
    DetailComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
  ToastrModule.forRoot(),CommonModule,NgSelectModule,FormsModule,CKEditorModule,SlickCarouselModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,

    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  public Editor = ClassicEditor;
}
