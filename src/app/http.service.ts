import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f85c12f7b4ab610f5a7684b084e51cb2&units=imperial`)
    .map(data => data.json())
    .toPromise()
  }

}
