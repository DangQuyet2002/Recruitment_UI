import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { ProfileUser } from 'src/app/Common/models/User';
import { UserService } from 'src/app/services/Admin/user.service';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent {
  avatarSrc: string = 'https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg';
  switch1Checked = false;
  switch2Checked = false;
  switch1PreviousState: boolean = false;
  switch2PreviousState: boolean = false;
  dataCate = new ProfileUser;
  dataUpdate = new ProfileUser;

  userId: string | null = "";
  idUpdate :  string ="";
  avatarupdate: string = "";
  loading: boolean = true;

  constructor(private router: Router,private route: ActivatedRoute,private userService: UserService ,private toastr: ToastrService ,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.location.reload();
    });

    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId !== null) {
      this.spinner.show(); // Display spinner before calling service

      this.userService.GetProfileUser(this.userId).subscribe({
        next: (data: any) => {
          this.dataCate = data.content;
          this.idUpdate = data.content.id;
        },
        error: (error) => {
          // Handle error if needed
          console.error('Error fetching user profile:', error);
        },
        complete: () => {
          this.spinner.hide(); // Hide spinner when service completes
        }
      });
    }
  }

  handleAvatarChange(event: Event): void {
    event.stopPropagation();
    this.avatarupdate = '';  // Đặt lại chuỗi base64 khi chọn tệp mới
    this.dataCate.urlAvatar = '';  // Đặt lại đường dẫn URL cũ của avatar
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file && file instanceof Blob) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result) {
                const arrayBuffer = e.target.result as ArrayBuffer;
                const base64String = this.arrayBufferToBase64(arrayBuffer);
                console.log(base64String);  // Log base64 string for debugging
                const dataUrl = URL.createObjectURL(file);
                this.avatarupdate = base64String;  // Cập nhật chuỗi base64 mới
                this.avatarSrc = dataUrl;  // Cập nhật xem trước hình ảnh mới
                this.dataCate.urlAvatar = dataUrl;  // Lưu trữ URL mới của avatar
            }
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
        };

        reader.readAsArrayBuffer(file);
    } else {
        console.error('Invalid file type.');
    }
}


  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
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

  UpdateProfile(id :string, data: ProfileUser){
    data.urlAvatar = this.avatarupdate;
    console.log(data);
    this.userService.UpdateProfileUser(id,data).subscribe({
      next: (value) => {

        this.toastr.success('Cập Nhật Thành Công', 'Success', {
          timeOut: 3000,
        });

        this.userService.GetProfileUser(id).subscribe({
          next: (data: any) => {
            this.dataCate = data.content;
          },
          error: (error) => {
            // Handle error if needed
            console.error('Error fetching user profile:', error);
          },
          complete: () => {
            this.spinner.hide(); // Hide spinner when service completes
          }
        });
      }
    });
  }
}
