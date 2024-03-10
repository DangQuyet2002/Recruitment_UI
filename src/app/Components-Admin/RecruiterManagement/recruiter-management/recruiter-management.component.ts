import { Component, OnInit } from '@angular/core';
import { RecruiterManagement } from 'src/app/Common/models/user';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-recruiter-management',
  templateUrl: './recruiter-management.component.html'
})
export class RecruiterManagementComponent implements OnInit {

  data: RecruiterManagement[] = [];
  status?: number;


  constructor(private recruitermanagementService: AdminUserService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const status = params['status'] as number;
      if (status !== undefined) {
        this.recruitermanagementService.RecruiterManagement(status)
          .subscribe({
            next: (response: any) => {
              if(response ) {
                this.data = response;
              } else {
                console.log("No data found");
              }
            },
            error: (error) => {
              console.log(error);
            }
          });
      }
    });

  }

  handleAccept(id:string = uuidv4(),status:number) {
    this.recruitermanagementService.UpdateStatus(id,status)
    .subscribe({
      next: (response: any) => {
        console.log('Dữ liệu đã được cập nhật:', response);
      },
      error: (error) => {
        console.error('Đã xảy ra lỗi:', error);
      }
    });
  }

}
