import { Filme } from './filme/filme';
import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, retry, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl = environment.API_STARWARS;

  constructor(private http: HttpClient) { }

 
  getAll(): Observable<any> {
    const url = `${this.baseUrl}/films`;
    return this.http.get<any>(url);
  }

  // getPeople():Observable<any>{
  //   const url = `${this.baseUrl}/people`;
  //   return this.http.get<any>(url);
  // }

  getUrl(url: string): Observable<any>{
    return this.http.get<any>(url);
  }

  // .pipe(map(id => id.sort((a: any, b: any) => (new id (a.episode_id)) - (new id (b.episode_id)))))
  // (id) => id.sort((a: any,b: any) => a.episode_id - b.episode_id))
  
}
