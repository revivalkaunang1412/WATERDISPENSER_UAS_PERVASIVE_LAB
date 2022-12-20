import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {
  serverUrl: any = 'http://localhost:1337/api/';
  constructor(
    public http: HttpClient
  ) { }

  httpOptions: any;
  getToken() {
    var tokenKey = localStorage.getItem('appToken');
    if (tokenKey != null) {
      var tkn = JSON.parse(tokenKey);
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tkn.jwt
        })
      }
    }
  }

  get(url) {
    this.getToken();
    return this.http.get(this.serverUrl + url, this.httpOptions);
  }

  post(url, data) {
    this.getToken();
    return this.http.post(this.serverUrl + url, data, this.httpOptions);
  }

  put(url, data) {
    this.getToken();
    return this.http.put(this.serverUrl + url, data, this.httpOptions);
  }

  delete(url) {
    this.getToken();
    return this.http.delete(this.serverUrl + url, this.httpOptions);
  }

}
