import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateJob, GetListJobs, OptionData, OptionSkill, OptionTime, OptionTitle } from 'src/app/Common/models/Employer';
import { EmployerService } from 'src/app/services/Admin/employer.service';
import { CommonModule } from '@angular/common';
import { NgSelectConfig } from '@ng-select/ng-select';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-jobs-employer',
  templateUrl: './jobs-employer.component.html',
})
export class JobsEmployerComponent implements OnInit {
  public Editor = ClassicEditor;
  createjob = new CreateJob();
  dataCate: GetListJobs[] = [];
  apiprovince: OptionData[] = [];
  apitime: OptionTime[] = [];
  apititle: OptionTitle[] = [];
  apiskill: OptionSkill[] = [];
  selectedCars = [];
  id = "";
  idUpdate = 0;
  p: number = 1;
  constructor(private employerService: EmployerService ,private toastr: ToastrService , private http: HttpClient,private config: NgSelectConfig) {

  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
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


  CreateJobs(id : string, data: CreateJob) {
    console.log(data);
    console.log(this.selectedCars);

    this.employerService.CreateJobs(id,data).subscribe({
      next: (value) => {
        const modal = document.getElementById('addRoleModal');
        if (modal) {
          modal.classList.remove('show');
          modal.setAttribute('aria-hidden', 'true');
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modalBackdrop) {
            modalBackdrop.remove();
          }
        }

        this.toastr.success('Thêm Mới Thành Công', 'Success', {
          timeOut: 3000,
        });

        this.initializeData();
      }
    });
  }

  GetJobsById(id : number){
    this.employerService.GetJobById(id).subscribe({
      next: (response: any) => {
        this.createjob = response;
        this.idUpdate = id;
        console.log(this.idUpdate);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  UpdateJobs(id : number,data: CreateJob) {
    this.employerService.UpdateJobs(id,data).subscribe({
      next: (value) => {
        const modal = document.getElementById('updateRoleModal');
        if (modal) {
          modal.classList.remove('show');
          modal.setAttribute('aria-hidden', 'true');
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modalBackdrop) {
            modalBackdrop.remove();
          }
        }

        this.toastr.success('Cập Nhật Thành Công', 'Success', {
          timeOut: 3000,
        });
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
