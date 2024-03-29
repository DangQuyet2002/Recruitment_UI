import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AdminUserService } from 'src/app/services/Admin/admin-user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'NgDotNetAuth.UI';
  username: string = '';
  constructor(private router: Router , private adminservice: AdminUserService) {}

  ngOnInit(): void {
    const authUserData = localStorage.getItem('token');
    if (authUserData) {
      this.adminservice.VerifyToken(authUserData).subscribe(res => {
        console.log(res);
        if (res.errorCode == 400) {
          this.username = '';
        } else {
          const parsedData = res.content;

          this.username = parsedData.fullname;
        }
      });
    }
  }

}
