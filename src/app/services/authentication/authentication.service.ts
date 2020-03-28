import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  post(url, params) {
    const headers = {headers: { 'Content-Type': 'application/json' }};
    return this.http.post(url, params, headers);
  }

  postPromise(url, params) {
    const headers = {headers: { 'Content-Type': 'application/json' }};
    return this.http.post(url, params, headers).toPromise();
  }

}
