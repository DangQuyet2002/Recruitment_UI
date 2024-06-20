import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserService } from '../../../../services/Admin/admin-user.service';
import { ListTemplate } from 'src/app/Common/models/Admin';

@Component({
  selector: 'app-template-cv',
  templateUrl: './template-cv.component.html',
  styleUrl: './template-cv.component.css'
})
export class TemplateCvComponent {
  constructor(private router: Router , private adminUserService: AdminUserService) {}
  dataCate: ListTemplate[] = [];
  p: number = 1;
  itemsPerPage: number = 3;
  totalskill: any;

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

  selectTemplate(selectedTemplateLink: string) {
    this.router.navigate(['/create-cv', { selectedTemplateLink: selectedTemplateLink }]);
  }
}

