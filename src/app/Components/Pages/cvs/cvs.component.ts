import { Component } from '@angular/core';
import { ProfileUser } from 'src/app/Common/models/User';

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
}
