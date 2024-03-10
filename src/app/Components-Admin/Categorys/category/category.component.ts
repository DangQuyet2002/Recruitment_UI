import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateCategory, ListCategory } from 'src/app/Common/models/user';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  dataCate: ListCategory[] = [];
  selectedCate = new CreateCategory();
  idUpdate = 0;

  constructor(private adminUserService: AdminUserService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminUserService.ListCategory()
      .subscribe({
        next: (response: any) => {
          this.dataCate = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  GetCateById(id : number){
    this.adminUserService.GetCateById(id).subscribe({
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

  DeleteCategory(id: number) {
    this.adminUserService.DeleteCategory(id).subscribe({
      next: (response) => {
        this.toastr.success("Xóa thành công!", "Succes");
        this.adminUserService.ListCategory()
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
        // Handle error in case of subscription failure
        console.error("Error deleting category:", error);
        this.toastr.error("Đã xảy ra lỗi khi xóa!", "Error");
      }
    });
  }

  CreateCategory(data: CreateCategory) {
    this.adminUserService.CreateCategory(data).subscribe({
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

        this.adminUserService.ListCategory()
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

  UpdateCategory(id : number,data: CreateCategory) {
    this.adminUserService.UpdateCategory(id,data).subscribe({
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

        this.adminUserService.ListCategory()
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

