import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllUse, RecruiterManagement } from 'src/app/Common/models/Admin';
import { environment } from 'src/environments/environment';
import { GetAllEmployer } from '../../Common/models/Admin';
import { v4 as uuidv4 } from 'uuid';
import { CreateJob, GetListJobs, OptionData, OptionTime } from 'src/app/Common/models/Employer';
import { ProfileUser } from 'src/app/Common/models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = 'Jobs';
  private urlProfile = 'Profile';
  idUser= '';

  constructor(private http:HttpClient) { }

  public getToken(): string | null {
    var authUserData = localStorage.getItem('userid');
    if (authUserData) {
        return this.idUser = authUserData;
    } else {
        return null;
    }
  }

  public GetTopNewJobs(){
    const topItems = 6;
    return this.http.get<any>(`${environment.apiUrl}/${this.url}/GetTopNewJobs?topItems=${topItems}`);
  }

  public DetailJobs(slug : string){
    return this.http.get<any>(`${environment.apiUrl}/${this.url}/Detail?slug=${slug}`);
  }

  public GetJobbyTitle(id : number){
    return this.http.get<any>(`${environment.apiUrl}/${this.url}/GetJobbyTitle?Idtitle=${id}`);
  }

  public GetProfileUser(id : string){
    return this.http.get<any>(`${environment.apiUrl}/${this.urlProfile}/my-profile/${id}`);
  }

  public UpdateProfileUser(id: string, profile: ProfileUser) {
    return this.http.post<any>(`${environment.apiUrl}/${this.urlProfile}/update-profile/${id}`, profile);
  }
}
