import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any>{
    let url = "assets/data/nav-aside.json";
    return this.http.get(url).pipe();
  }
}
