import { Component } from '@angular/core';
import { AuthService } from '../../../services/Auth/auth.service';
import { Login } from '../../../Common/models/Admin';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/Admin/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  isFirstLoad: boolean = true;
  user: Login = new Login(); // Khởi tạo đối tượng user từ model

  constructor( private toastr: ToastrService,private http: HttpClient,private authService: AuthService,private router: Router, userservice : UserService) {}

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

      this.http.get('https://localhost:44372/api/User/VerifyToken?token=' + user).subscribe((res: any) => {
        if (res.content) {
            this.toastr.success('Đăng Nhập Thành Công', 'Success', {
              timeOut: 3000,
            });
            localStorage.setItem('token', user);
            const userId = res.content.id;
            localStorage.setItem('userid', userId);


            if (res.content.role === 'Admin') {
              this.router.navigate(['/home-admin']);
            }
            if (res.content.role === 'Employer') {
              this.router.navigate(['/home-employer']);
            }
            if (res.content.role === 'User') {
              this.reloadAndNavigateToHome();
            }
            else {
              // Thực hiện hành động cho quyền không phải admin
            }
        }
      })
    });
  }
}
