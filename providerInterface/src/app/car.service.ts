import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { car } from '../car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carUrl = 'http://localhost:3001/cars';
  getCars(): Observable<car[]> {
    return this.http.get<car[]>(this.carUrl)
  }

  

  constructor(
    private http: HttpClient
  ) { }

}
