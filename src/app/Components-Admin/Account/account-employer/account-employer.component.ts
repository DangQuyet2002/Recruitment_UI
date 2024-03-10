import { Component, OnInit } from '@angular/core';
import { GetAllEmployer } from 'src/app/Common/models/user';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';

@Component({
  selector: 'app-account-employer',
  templateUrl: './account-employer.component.html'
})
export class AccountEmployerComponent implements OnInit {

  employers: GetAllEmployer[] = [];

  constructor(private adminUserService: AdminUserService) { }

  ngOnInit(): void {
    this.adminUserService.GetAllEmployer()
      .subscribe({
        next: (response: any) => {
          this.employers = response.content.data;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
