import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OptionCategory, OptionData, OptionSkill } from 'src/app/Common/models/Employer';
import { GetTopNewJobs } from 'src/app/Common/models/User';
import { EmployerService } from 'src/app/services/Admin/employer.service';
import { UserService } from 'src/app/services/Admin/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiprovince: OptionData[] = [];
  apiskill: OptionSkill[] = [];
  gettopnewjob: GetTopNewJobs[] = [];

  constructor(private router: Router, private employerService: EmployerService , private userservice : UserService) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.location.reload();
    });
    this.ApiProvince();
    this.ApiSkill();
    this.GetTopNewJobs();
  }

  GetTopNewJobs(){
    this.userservice.GetTopNewJobs().subscribe({
      next: (response: any) => {
        this.gettopnewjob = response;
        console.log(this.gettopnewjob);
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
