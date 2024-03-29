import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Common/models/Admin';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  title = 'NgDotNetAuth.UI';
  user = new Register();

  constructor(private authService: AuthService) {}

  register(user: Register) {
    this.authService.register(user).subscribe();
  }
}
