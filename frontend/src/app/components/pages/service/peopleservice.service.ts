import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeopleserviceService {

  baseUrl = environment.API_STARWARS;

  constructor(private http: HttpClient,) { }


  getPeople():Observable<any>{
    const url = `${this.baseUrl}/people/`;
    // // const url = 'https://swapi.dev/api/people/?page=1';
    // const url = 'https://swapi.dev/api/people/52/';
    return this.http.get<any>(url);
  }
  // getPeople(page: number):Observable<any>{
  //   const url = `${this.baseUrl}/people/?page=${page}`;
  //   return this.http.get<any>(url);
  // }

  getMundo(url: string): Observable<any>{
    return this.http.get<any>(url);
  }
  
}
