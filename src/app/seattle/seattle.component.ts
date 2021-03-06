import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';



@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather = null;
  humidity = null;
  temp_avg = null;
  temp_high = null;
  temp_low = null;
  status = null;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.weather = this._httpService.retrieveWeather('seattle')
    .then( weather => { 
      console.log(this.weather)
      this.humidity = weather.main.humidity 
      this.temp_avg = weather.main.temp
      this.temp_high = weather.main.temp_max
      this.temp_low = weather.main.temp_min
      this.status = weather.weather[0].description
    })
    .catch( err => { console.log(err); })
  }

}
