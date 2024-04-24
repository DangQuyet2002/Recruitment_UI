import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  title = 'NgDotNetAuth.UI';
  username: string = '';
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
  }
}
