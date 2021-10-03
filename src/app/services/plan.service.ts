import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Day} from '../models/Day';

@Injectable({providedIn: 'root'})
export class PlanService{
  constructor(
    private http: HttpClient
  ){}
  baseUrl: string = 'https://plan-parser.herokuapp.com'

  getInfOneOne(): Observable<Day[]>{
    let plan = this.http.get(this.baseUrl + '/inf-1-1') as Observable<Day[]>
    console.log(plan)
    return plan
  }

  getInfOneTwo(): Observable<Day[]>{
    let plan = this.http.get(this.baseUrl + '/inf-1-2') as Observable<Day[]>
    console.log(plan)
    return plan
  }
}
