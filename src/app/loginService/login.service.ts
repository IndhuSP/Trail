import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LoginService 
{
  URL = 'http://172.20.126.27:3000/auth';
  /* URLCompanies='http://172.20.126.10/RhytifyApi/api/login'; */
  constructor(private http: HttpClient, private cookie: CookieService) 
  { }
  /* getCompanies(): Observable<any>
  {
    return this.http.get(this.URLCompanies).map(res => res.json());
  } */

  login(companyLocation, project, username, password ) 
  {
    return this.http.post(this.URL, {'companyLocation': companyLocation, 'project': project, 'username': username, 'password': password});
  }

  loggedIn() {
    return !!this.cookie.get('jwtToken');
  }
  
}
