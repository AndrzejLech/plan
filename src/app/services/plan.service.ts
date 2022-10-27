import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Day} from '../models/Day';
import {Week} from "../models/Week";

@Injectable({providedIn: 'root'})
export class PlanService {
  constructor(
    private http: HttpClient
  ) {
  }

  //baseUrl: string = 'http://127.0.0.1:8080'
  baseUrl: string = 'https://go-production.up.railway.app';

  getMfzAll(): Observable<Day[]> {
    return this.http.get(this.baseUrl + '/mfz') as Observable<Day[]>;
  }

  getMfzWeek(): Observable<Week[]> {
    return this.http.get(this.baseUrl + '/mfz-week') as Observable<Week[]>;
  }

  getNurAll(): Observable<Day[]> {
    return this.http.get(this.baseUrl + '/nur') as Observable<Day[]>;
  }

  getNurWeek(): Observable<Week[]> {
    return this.http.get(this.baseUrl + '/nur-week') as Observable<Week[]>;
  }

}
