import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/Admin/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent  {
  slug: string = "";
  jobDetails: any;
  jobTitel: any;

  loading: boolean = true;
  constructor(private route: ActivatedRoute, private useService: UserService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this.route.params.subscribe(params => {
      this.spinner.show();
      this.slug = params['slug'];
      this.loadJobDetails();
    });

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  loadJobDetails() {
    this.useService.DetailJobs(this.slug).subscribe((data: any) => {
      this.jobDetails = data.content;
      this.loadJobDetailsTitel(this.jobDetails.titleId);
    });
  }

  loadJobDetailsTitel(Id : number) {
    this.useService.GetJobbyTitle(Id).subscribe((data: any) => {
      this.jobTitel = data.content;
    });
  }
}
