import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Login } from '../../Common/models/user';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  isFirstLoad: boolean = true;
  user: Login = new Login(); // Khởi tạo đối tượng user từ model

  constructor(private authService: AuthService,private router: Router) {}

  reloadAndNavigateToHome() {
    // Tạo một số ngẫu nhiên để thêm vào URL
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/home']);
      setTimeout(() => {
        window.location.reload();
      }, 0);
    });
  }

  login() {
    this.authService.login(this.user).subscribe((user: string) => {
      const expirationTime = new Date().getTime() + 15 * 60 * 1000; // Thời gian hết hạn là 15 phút từ thời điểm hiện tại
      localStorage.setItem('authUser', user);
      localStorage.setItem('authExpiration', expirationTime.toString());
      setTimeout(() => {
        this.authService.logout(); // Gọi phương thức logout khi token hết hạn
      }, 15 * 60 * 1000); // Sau 15 phút

      const userRole = JSON.parse(user);

      if (userRole.role === 'Admin') {
        this.router.navigate(['/home-admin']);
      }
      if (userRole.role === 'Employer') {
        this.router.navigate(['/home-employer']);
      }
      if (userRole.role === 'User') {
        this.reloadAndNavigateToHome();
      }
      else {
        // Thực hiện hành động cho quyền không phải admin
      }
    });
  }
}
