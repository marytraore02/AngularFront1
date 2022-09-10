import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from './pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private baseUrl = "http://localhost:9000/pays/read";

  constructor(private http: HttpClient) { }

  getPays(): Observable<Pays[]>{
    return this.http.get<Pays[]>(`${this.baseUrl}`);
  }
}
