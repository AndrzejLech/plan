import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Day} from '../models/Day';
import {DoubleDay} from '../models/DoubleDay';

@Injectable({providedIn: 'root'})
export class PlanService {
  constructor(
    private http: HttpClient
  ) {
  }

  //baseUrl: string = 'http://127.0.0.1:8080'
  baseUrl: string = 'https://plan-parser.herokuapp.com';

  getInfOneOne(): Observable<Day[]> {
    return this.http.get(this.baseUrl + '/inf-1-1') as Observable<Day[]>;
  }

  getInfOneTwo(): Observable<Day[]> {
    return this.http.get(this.baseUrl + '/inf-1-2') as Observable<Day[]>;
  }

  getNur(): Observable<Day[]> {
    return this.http.get(this.baseUrl + '/nur') as Observable<Day[]>;
  }

  getSzymin(): Observable<DoubleDay[]> {
    return this.http.get(this.baseUrl + '/szymin') as Observable<DoubleDay[]>
  }

  getMamlina(): Observable<DoubleDay[]>{
    return this.http.get(this.baseUrl + '/mamlina') as Observable<DoubleDay[]>
  }
}
