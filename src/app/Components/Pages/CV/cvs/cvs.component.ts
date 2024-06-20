import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CvsByUser, ProfileUser } from 'src/app/Common/models/User';
import { UserService } from '../../../../services/Admin/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrl: './cvs.component.css'
})
export class CvsComponent {
  avatarSrc: string = 'https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg';
  switch1Checked = false;
  switch2Checked = false;
  switch1PreviousState: boolean = false;
  switch2PreviousState: boolean = false;
  dataCate = new ProfileUser;
  dataCv : CvsByUser[] = [];
  idUser= '';

  constructor(private router: Router, private http: HttpClient,private toastr: ToastrService , private userService: UserService) {}

  ngOnInit(): void {
    this.getToken();
    this.userService.GetCvsByUser(this.idUser).subscribe({
      next: (response: any) => {
        this.dataCv = response.content;
        console.log(this.dataCate)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  public getToken(): string | null {
    var authUserData = localStorage.getItem('userid');
    if (authUserData) {
        return this.idUser = authUserData;
    } else {
        return null;
    }
  }


  toggleSwitch(switchNumber: number) {
    if (switchNumber === 1 && this.switch1Checked !== this.switch1PreviousState) {
      this.switch1Checked = !this.switch1Checked;
      this.switch1PreviousState = this.switch1Checked;
    }
    else if (switchNumber === 2 && this.switch2Checked !== this.switch2PreviousState) {
      this.switch2Checked = !this.switch2Checked;
      this.switch2PreviousState = this.switch2Checked;
    }
  }

  selectTemplate(selectedTemplateLink: string) {
    this.router.navigate(['/create-cv', { selectedTemplateLink: selectedTemplateLink }]);
  }
}
