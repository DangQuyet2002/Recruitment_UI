import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateProvince, CreateTitle, ListProvince, ListTitle } from 'src/app/Common/models/Admin';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {

  dataCate: ListTitle[] = [];
  selectedCate = new CreateTitle();
  idUpdate = 0;
  p: number = 1;

  constructor(private adminUserService: AdminUserService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminUserService.GetListTitle()
      .subscribe({
        next: (response: any) => {
          this.dataCate = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  GetTitleById(id : number){
    this.adminUserService.GetTitleById(id).subscribe({
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

  DeleteTitle(id: number) {
    this.adminUserService.DeleteTitle(id).subscribe({
      next: (response) => {
        this.toastr.success("Xóa thành công!", "Succes");
        this.adminUserService.GetListTitle()
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

  CreateTitle(data: CreateTitle) {
    this.adminUserService.CreateTitle(data).subscribe({
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

        this.adminUserService.GetListTitle()
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

  UpdateTitle(id : number,data: CreateTitle) {
    this.adminUserService.UpdateTitle(id,data).subscribe({
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

        this.adminUserService.GetListTitle()
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
