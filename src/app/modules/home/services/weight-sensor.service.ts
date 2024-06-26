import { WeightSensor } from './../models/weight-sensor.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightSensorService {
  private baseUrl = "https://equipatour.osc-fr1.scalingo.io/api/v1/weight-balances";

  constructor(private http: HttpClient) { }

  getWeightSensorById(id: number): Observable<WeightSensor> {
    return this.http.get<WeightSensor>(this.baseUrl + "/" + id);
  }
}
