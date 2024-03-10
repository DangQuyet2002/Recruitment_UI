import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NgDotNetAuth.UI';
  username: string = '';
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;
  isAdminPage: boolean = false;
  isEmployerPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const authUserData = localStorage.getItem('authUser');
    if (authUserData) {
      const parsedData = JSON.parse(authUserData);
      if(parsedData.role === "User"){
        this.username = parsedData.fullName;
      } else {
        this.username = '';
      }
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        this.isRegisterPage = event.url === '/register';

        //Admin
        this.isAdminPage = event.url === '/home-admin';

        //Employer
        this.isEmployerPage = event.url === '/home-employer';
      }
    });
  }
}
