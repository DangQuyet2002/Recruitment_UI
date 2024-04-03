import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllUse, RecruiterManagement } from 'src/app/Common/models/Admin';
import { environment } from 'src/environments/environment';
import { GetAllEmployer } from '../../Common/models/Admin';
import { v4 as uuidv4 } from 'uuid';
import { CreateJob, GetListJobs, OptionData, OptionTime } from 'src/app/Common/models/Employer';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = 'Jobs';

  private idEmployer =  '';

  constructor(private http:HttpClient) { }

  public getToken(): string | null {
    var authUserData = localStorage.getItem('userid');
    if (authUserData) {
        return this.idEmployer = authUserData;
    } else {
        return null;
    }
  }

  public GetTopNewJobs(){
    const topItems = 6;
    return this.http.get<any>(`${environment.apiUrl}/${this.url}/GetTopNewJobs?topItems=${topItems}`);
  }
}
