import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    const url = 'https://swapi.dev/api/people/'
    return this.http.get<any>(url);
  }

  getPeopleById(url:any): Observable<any> {
    return this.http.get<any>(url);
  }

}

