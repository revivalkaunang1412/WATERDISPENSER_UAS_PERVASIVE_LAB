import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor(
    public http: HttpClient
  ) { }
  get() {
    return 'OK';
  }
}
