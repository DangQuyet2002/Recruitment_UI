import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCategory, CreateProvince, CreateRoleModel, CreateSkill, GetAllUse, ListCategory, ListProvince, ListSkill, ManageUserRoles, RecruiterManagement, RoleManagement, UpdateRoleModel } from 'src/app/Common/models/user';
import { environment } from 'src/environments/environment';
import { GetAllEmployer } from '../../Common/models/user';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  private url = 'AdminUser';
  private urlRole = 'AdminRole';
  private urlCate = 'AdminCategory';
  private urlProvince = 'AdminProvince';
  private urlSkill = 'AdminSkill';




  constructor(private http:HttpClient) { }

  public getAllUser(): Observable<GetAllUse[]> {
    return this.http.get<GetAllUse[]>(`${environment.apiUrl}/${this.url}/GetAllUser`);
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
//#region  Role

  public ListRole(): Observable<RoleManagement[]> {
    return this.http.get<RoleManagement[]>(`${environment.apiUrl}/${this.urlRole}/ListRoles`);
  }

  public CreateRole(createrole: CreateRoleModel): Observable<CreateRoleModel[]> {
    return this.http.post<CreateRoleModel[]>(`${environment.apiUrl}/${this.urlRole}/CreateRole`,createrole);
  }

  public RemoveRole(Id:string = uuidv4()): Observable<RoleManagement[]> {
    return this.http.get<RoleManagement[]>(`${environment.apiUrl}/${this.urlRole}/DeleteRole?id=${Id}`);
  }

  public UpdateRole(role: UpdateRoleModel): Observable<UpdateRoleModel[]> {
    return this.http.post<UpdateRoleModel[]>(`${environment.apiUrl}/${this.urlRole}/EditRole`, role);
  }

  public GetRoleById(Id:string = uuidv4()): Observable<RoleManagement[]> {
    return this.http.get<RoleManagement[]>(`${environment.apiUrl}/${this.urlRole}/GetRoleById?id=${Id}`);
  }
  public GetAllUserRole(): Observable<GetAllUse[]> {
    return this.http.get<GetAllUse[]>(`${environment.apiUrl}/${this.urlRole}/GetAllUserRole`);
  }
  public ManageUserRoles(userId:string = uuidv4()): Observable<ManageUserRoles[]> {
    return this.http.get<ManageUserRoles[]>(`${environment.apiUrl}/${this.urlRole}/ManageUserRoles?userId=${userId}`);
  }
  public UserRolesSave(data: ManageUserRoles[], userId: string = uuidv4()): Observable<ManageUserRoles[]> {
    return this.http.post<ManageUserRoles[]>(`${environment.apiUrl}/${this.urlRole}/ManageUserRolesSave?userId=${userId}`, data);
  }
  // #endregion

  //#region Category

  public ListCategory(): Observable<ListCategory[]> {
    return this.http.get<ListCategory[]>(`${environment.apiUrl}/${this.urlCate}/ListCategory`);
  }
  public DeleteCategory(id : number): Observable<ListCategory[]> {
    return this.http.delete<ListCategory[]>(`${environment.apiUrl}/${this.urlCate}/DeleteCategory?id=${id}`);
  }
  public CreateCategory(createCate: CreateCategory): Observable<CreateCategory[]> {
    return this.http.post<CreateCategory[]>(`${environment.apiUrl}/${this.urlCate}/CreateCategory`,createCate);
  }
  public UpdateCategory( id : number ,updateCate: CreateCategory): Observable<CreateCategory[]> {
    return this.http.post<CreateCategory[]>(`${environment.apiUrl}/${this.urlCate}/UpdateCategory?id=${id}`, updateCate);
  }
  public GetCateById(id : number): Observable<ListCategory[]> {
    return this.http.get<ListCategory[]>(`${environment.apiUrl}/${this.urlCate}/GetCateById?id=${id}`);
  }
  //#endregion

  //#region Category

  public ListProvince(): Observable<ListProvince[]> {
    return this.http.get<ListProvince[]>(`${environment.apiUrl}/${this.urlProvince}/ListProvince`);
  }
  public DeleteProvince(id : number): Observable<ListProvince[]> {
    return this.http.delete<ListProvince[]>(`${environment.apiUrl}/${this.urlProvince}/DeleteProvince?id=${id}`);
  }
  public CreateProvince(createCate: CreateProvince): Observable<CreateProvince[]> {
    return this.http.post<CreateProvince[]>(`${environment.apiUrl}/${this.urlProvince}/CreateProvince`,createCate);
  }
  public UpdateProvince( id : number ,updateCate: CreateProvince): Observable<CreateProvince[]> {
    return this.http.post<CreateProvince[]>(`${environment.apiUrl}/${this.urlProvince}/UpdateProvince?id=${id}`, updateCate);
  }
  public GetProvinceById(id : number): Observable<ListProvince[]> {
    return this.http.get<ListCategory[]>(`${environment.apiUrl}/${this.urlProvince}/GetProvinceId?id=${id}`);
  }
  //#endregion

  //#region Category

  public GetListSkill(): Observable<ListSkill[]> {
    return this.http.get<ListSkill[]>(`${environment.apiUrl}/${this.urlSkill}/GetListSkill`);
  }
  public DeleteSkill(id : number): Observable<ListSkill[]> {
    return this.http.delete<ListSkill[]>(`${environment.apiUrl}/${this.urlSkill}/DeleteSkill?id=${id}`);
  }
  public CreateSkill(formData: FormData): Observable<CreateSkill[]> {
    return this.http.post<CreateSkill[]>(`${environment.apiUrl}/${this.urlSkill}/CreateSkill`,formData);
  }
  public UpdateSkill( id : number ,updateCate: CreateSkill): Observable<CreateSkill[]> {
    return this.http.post<CreateSkill[]>(`${environment.apiUrl}/${this.urlSkill}/UpdateSkill?id=${id}`, updateCate);
  }
  public UpdateFile( id : number ,updateCate: CreateSkill): Observable<CreateSkill[]> {
    return this.http.post<CreateSkill[]>(`${environment.apiUrl}/${this.urlSkill}/UpdateSkill?id=${id}`, updateCate);
  }
  public GetSkillById(id : number): Observable<ListSkill[]> {
    return this.http.get<ListSkill[]>(`${environment.apiUrl}/${this.urlSkill}/GetSkillById?id=${id}`);
  }
  //#endregion
}
