import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //apiUrls = 'https://reqres.in/api/users?page=2';

  apiUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + '?page=' + 1);
  }

  public getUser (id): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + '?id=' + id);
  }

  public getUserPage(page): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + '?page=' + page );
  }
}
