import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const status = params['status'];
      this.router.navigate(['/home-admin/recruiter-management'], { queryParams: { status: status } });
    });
  }

}
