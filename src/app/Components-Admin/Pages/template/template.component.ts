import { ListTemplate } from './../../../Common/models/Admin';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateTemplate } from 'src/app/Common/models/Admin';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  dataCate: ListTemplate[] = [];
  createtemp = new CreateTemplate();
  p: number = 1;
  itemsPerPage: number = 3;
  totalskill: any;
  fileTemplate: File | null = null;
  base64Image: string = "";

  constructor(private adminUserService: AdminUserService, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.adminUserService.GetListTemplate().subscribe({
      next: (response: any) => {
        this.dataCate = response;
        this.itemsPerPage = response.length;
        console.log(this.dataCate)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  downloadFile(filePath: string , name: string) {
    this.http.get(filePath, {responseType: 'blob'})
      .subscribe((file: Blob) => {
        saveAs(file, name);
      });
  }

  onFileSelected(event: any) {
    this.createtemp.url = event.target.files[0];
  }

  onFileChanged(event: any) {
    this.createtemp.urlImage = event.target.files[0];
  }

  CreateTemplate(){
    const formData = new FormData();
    formData.append('name', this.createtemp.name);
    formData.append('description', this.createtemp.description);
    formData.append('urlImage', this.createtemp.urlImage);
    formData.append('url', this.createtemp.url);


    this.adminUserService.CreateTemplate(formData).subscribe({
      next: (value) => {
        this.toastr.success('Template created successfully', 'Success');
        this.adminUserService.GetListTemplate().subscribe({
          next: (response: any) => {
            this.dataCate = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        console.log(error);
        this.toastr.error('Failed to create template', 'Error');
      }
    });
  }

  DeleteTemplate(id: number) {
    this.adminUserService.DeleteTemplate(id).subscribe({
      next: (response) => {
        this.toastr.success("Xóa thành công!", "Succes");
        this.adminUserService.GetListTemplate()
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
}
