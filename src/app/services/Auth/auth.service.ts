import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login, Register } from '../../Common/models/Admin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  idUser = "";

  public register(user: Register): Observable<any> {
    return this.http.post<any>(
      'https://localhost:44372/api/User/register',
      user
    );
  }

  public login(user: Login): Observable<string> {
    return this.http.post('https://localhost:44372/api/User/login', user, {
      responseType: 'text',
    });
  }

  public getMe(): Observable<string> {
    return this.http.get('https://localhost:7272/api/Auth', {
      responseType: 'text',
    });
  }

  logout(): Observable<any> {
    return this.http.post<any>('https://localhost:44372/api/User/logout', null);
  }
}
