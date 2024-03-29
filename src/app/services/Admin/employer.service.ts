import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllUse, RecruiterManagement } from 'src/app/Common/models/Admin';
import { environment } from 'src/environments/environment';
import { GetAllEmployer } from '../../Common/models/Admin';
import { v4 as uuidv4 } from 'uuid';
import { GetListJobs, OptionData, OptionTime } from 'src/app/Common/models/Employer';

@Injectable({
  providedIn: 'root'
})

export class EmployerService {
  private url = 'EmployerJobs';
  private shared = 'Shared';

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

  public ApiProvince(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.shared}/ApiProvince`);
  }

  public ApiTime(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.shared}/ApiTime`);
  }

  public ApiTitle(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.shared}/ApiTitle`);
  }
  public ApiSkill(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.shared}/ApiSkill`);
  }


  public GetListJobs(): Observable<GetListJobs[]> {
    this.getToken();
    return this.http.get<GetListJobs[]>(`${environment.apiUrl}/${this.url}/GetListJobs?id=${this.idEmployer}`);
  }

  public GetAllEmployer(): Observable<GetAllEmployer[]> {
    return this.http.get<GetAllEmployer[]>(`${environment.apiUrl}/${this.url}/GetAllEmployer`);
  }

  public RecruiterManagement(status: number): Observable<RecruiterManagement[]> {
    return this.http.get<RecruiterManagement[]>(`${environment.apiUrl}/${this.url}/RecruiterManagement?status=${status}`);
  }

  public UpdateStatus(Id:string = uuidv4(),status: number): Observable<RecruiterManagement[]> {
    return this.http.get<RecruiterManagement[]>(`${environment.apiUrl}/${this.url}/UpdateStatus?id=${Id}&status=${status}`);
  }
}
