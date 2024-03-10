import { Component, OnInit } from '@angular/core';
import { GetAllUseRole, ManageUserRoles } from 'src/app/Common/models/user';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-decentralization',
  templateUrl: './decentralization.component.html'
})


export class DecentralizationComponent implements OnInit {

  userRole: GetAllUseRole[] = [];
  manage :  ManageUserRoles[] = [];
  manages = [];
  formData: any[] = [];
  idUserSave :string = uuidv4();

  constructor(private adminUserService: AdminUserService , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminUserService.GetAllUserRole()
      .subscribe({
        next: (response: any) => {
          this.userRole = response.content;
          console.log(this.userRole);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  ManageUserRoles(userId:string = uuidv4()): void {
    this.adminUserService.ManageUserRoles(userId).subscribe({
      next: (response: any) => {
        this.manage = response.content;
        this.idUserSave = userId;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateFormData(): ManageUserRoles[] {
    const formData: ManageUserRoles[] = [];
    this.manage.forEach(user => {
      formData.push({
        roleId: user.roleId,
        roleName: user.roleName,
        isSelected: user.isSelected
      });
    });
    return formData;
  }

  UserRolesSave(userId:string = uuidv4()) {
    const formData = this.updateFormData();
    console.log(formData);
    this.adminUserService.UserRolesSave(formData,userId).subscribe({
      next: (response) => {
        const modal = document.getElementById('addRoleModal');
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

        this.adminUserService.GetAllUserRole()
        .subscribe({
          next: (response: any) => {
            this.userRole = response.content;
            console.log(this.userRole);
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        this.toastr.success(error, 'Error', {
          timeOut: 3000,
        });
      }

    });
  }



  toggleCheckbox(selectedUser: any) {
    this.manage.forEach(user => {
      if (user === selectedUser) {
        user.isSelected = true;
        this.updateFormData(); // Chọn checkbox được chọn
      } else {
        user.isSelected = false;
        this.updateFormData(); // Bỏ chọn các checkbox khác
      }
    });
  }


}



