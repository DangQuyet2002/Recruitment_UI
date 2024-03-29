import { Component, OnInit ,EventEmitter, Input, Output } from '@angular/core';
import { CreateRoleModel, RoleManagement, UpdateRoleModel } from 'src/app/Common/models/Admin';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
  roles: RoleManagement[] = [];
  modal: any[] = [
    // Dữ liệu vai trò hiện có
  ];
  selectedRole = new UpdateRoleModel();
  newRole = new CreateRoleModel();


  constructor(private adminUserService: AdminUserService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.selectedRole)
    this.adminUserService.ListRole()
      .subscribe({
        next: (response: any) => {
          this.roles = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  createRole(data: CreateRoleModel) {
    this.adminUserService.CreateRole(data).subscribe({
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

        this.adminUserService.ListRole().subscribe({
          next: (response: any) => {
            this.roles = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }

  GetRoleById(id:string = uuidv4()): void {
    this.adminUserService.GetRoleById(id).subscribe({
      next: (response: any) => {
        this.selectedRole = response.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  RemoveRole(id:string = uuidv4()) {
    this.adminUserService.RemoveRole(id)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        this.toastr.success('Xóa dữ liệu thành công', 'Success', {
          timeOut: 3000,
        });

        this.adminUserService.ListRole().subscribe({
          next: (response: any) => {
            this.roles = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        this.toastr.error('Đã xảy ra lỗi', 'Error', {
          timeOut: 3000,
        });

      }
    });


  }

  UpdateRole(data: UpdateRoleModel) {
    console.log(data);
    this.adminUserService.UpdateRole(data).subscribe({
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

        this.adminUserService.ListRole().subscribe({
          next: (response: any) => {
            this.roles = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }
}
