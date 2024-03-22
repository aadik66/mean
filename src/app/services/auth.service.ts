import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../api.urls';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http = inject(HttpClient);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  registerService(registerObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`, registerObj);
  }

  loginService(loginObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
  }
  isLoggedIn(){
     return !!localStorage.getItem('user_id');
     
  }

  getAllUsers(){
    return this.http.get<any>('http://localhost:5000/api/user/getAll');
  }

  listService(){
    return this.http.get<any>('http://localhost:5000/api/role/getAll');
  }
  
}