import {BehaviorSubject, Observable} from "rxjs";


export class WeekSpanHandler{

  private _weekSpan: BehaviorSubject<string> = new BehaviorSubject("")
  weekSpan: Observable<string> = this._weekSpan.asObservable()

  setWeekSpan(value: string){
    this._weekSpan.next(value)
  }

}

