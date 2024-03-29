import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetListJobs, OptionData, OptionSkill, OptionTime, OptionTitle } from 'src/app/Common/models/Employer';
import { EmployerService } from 'src/app/services/Admin/employer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-employer',
  templateUrl: './jobs-employer.component.html',
})
export class JobsEmployerComponent implements OnInit {

  dataCate: GetListJobs[] = [];
  apiprovince: OptionData[] = [];
  apitime: OptionTime[] = [];
  apititle: OptionTitle[] = [];
  apiskill: OptionSkill[] = [];


  constructor(private employerService: EmployerService ,private toastr: ToastrService , private http: HttpClient) { }

  ngOnInit(): void {
    this.ApiProvince();
    this.ApiTime();
    this.ApiSkill();
    this.ApiTitle();
    this.employerService.GetListJobs()
      .subscribe({
        next: (response: any) => {
          this.dataCate = response;
          console.log(this.dataCate);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  ApiProvince(){
    this.employerService.ApiProvince().subscribe({
      next: (response: any) => {
        this.apiprovince = response.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  ApiTime(){
    this.employerService.ApiTime().subscribe({
      next: (response: any) => {
        this.apitime = response.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ApiTitle(){
    this.employerService.ApiTitle().subscribe({
      next: (response: any) => {
        this.apititle = response.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ApiSkill(){
    this.employerService.ApiSkill().subscribe({
      next: (response: any) => {
        this.apiskill = response.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
