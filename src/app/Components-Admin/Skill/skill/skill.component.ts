import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';
import { ToastrService } from 'ngx-toastr';
import { CreateSkill, ListSkill } from 'src/app/Common/models/user';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit {

  dataCate: ListSkill[] = [];
  idUpdate = 0;
  selectedCate = new CreateSkill();

  constructor(private adminUserService: AdminUserService ,private toastr: ToastrService , private http: HttpClient) { }

  ngOnInit(): void {
    this.adminUserService.GetListSkill()
      .subscribe({
        next: (response: any) => {
          this.dataCate = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  onFileSelected(event: any) {
    this.selectedCate.logo = event.target.files[0];
  }

  CreateSkill() {
    const formData = new FormData();
    formData.append('name', this.selectedCate.name);
    formData.append('logo', this.selectedCate.logo);

    this.adminUserService.CreateSkill(formData).subscribe({
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

        this.adminUserService.GetListSkill()
        .subscribe({
          next: (response: any) => {
            this.dataCate = response;
          },
        error: (error) => {
          console.log(error);
        }
      });
      }
    })
  }

  GetSkillById(id : number){
    this.adminUserService.GetSkillById(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.selectedCate = response;
        this.idUpdate = response.id;
        console.log(this.idUpdate);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  DeleteSkill(id: number) {
    this.adminUserService.DeleteSkill(id).subscribe({
      next: (response) => {
        this.toastr.success("Xóa thành công!", "Succes");
        this.adminUserService.GetListSkill()
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

  UpdateSkill(id : number,data: CreateSkill) {
    this.adminUserService.UpdateSkill(id,data).subscribe({
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

        this.adminUserService.GetListSkill()
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
