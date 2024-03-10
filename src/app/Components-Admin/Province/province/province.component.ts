import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateProvince, ListProvince } from 'src/app/Common/models/user';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html'
})
export class ProvinceComponent implements OnInit {

  dataCate: ListProvince[] = [];
  selectedCate = new CreateProvince();
  idUpdate = 0;

  constructor(private adminUserService: AdminUserService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminUserService.ListProvince()
      .subscribe({
        next: (response: any) => {
          this.dataCate = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  GetProvinceById(id : number){
    this.adminUserService.GetProvinceById(id).subscribe({
      next: (response: any) => {
        this.selectedCate = response;
        this.idUpdate = response.id;
        console.log(this.idUpdate);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  DeleteProvince(id: number) {
    this.adminUserService.DeleteProvince(id).subscribe({
      next: (response) => {
        this.toastr.success("Xóa thành công!", "Succes");
        this.adminUserService.ListProvince()
        .subscribe({
          next: (response: any) => {
            this.dataCate = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        this.toastr.error("Đã xảy ra lỗi khi xóa!", "Error");
      }
    });
  }

  CreateProvince(data: CreateProvince) {
    this.adminUserService.CreateProvince(data).subscribe({
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

        this.adminUserService.ListProvince()
        .subscribe({
          next: (response: any) => {
            this.dataCate = response;
          },
        error: (error) => {
          console.log(error);
        }
      });
      }
    });
  }

  UpdateProvince(id : number,data: CreateProvince) {
    this.adminUserService.UpdateProvince(id,data).subscribe({
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

        this.adminUserService.ListProvince()
        .subscribe({
          next: (response: any) => {
            this.dataCate = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }
}
