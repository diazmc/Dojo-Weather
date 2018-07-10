import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather = null;
  humidity = null;
  temp_avg = null;
  temp_high = null;
  temp_low = null;
  status = null;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.weather = this._httpService.retrieveWeather('dallas')
    .then( weather => { 
      console.log(this.weather)
      this.humidity = weather.main.humidity 
      this.temp_avg = weather.main.temp + "° F"
      this.temp_high = weather.main.temp_max + "° F"
      this.temp_low = weather.main.temp_min + "° F"
      this.status = weather.weather[0].description
    })
    .catch( err => { console.log(err); })
  }
}
