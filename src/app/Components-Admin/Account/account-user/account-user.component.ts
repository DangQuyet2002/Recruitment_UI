import { Component, OnInit } from '@angular/core';
import { GetAllUse } from 'src/app/Common/models/Admin';
import { AdminUserService } from '../../../services/Admin/admin-user.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html'
})


export class AccountUserComponent implements OnInit {
  users: GetAllUse[] = [];

  constructor(private adminUserService: AdminUserService) { }

  ngOnInit(): void {
    this.adminUserService.getAllUser()
      .subscribe({
        next: (response: any) => {
          this.users = response.content.data;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
