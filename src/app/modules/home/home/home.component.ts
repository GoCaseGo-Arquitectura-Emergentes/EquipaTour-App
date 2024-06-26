import {WeightSensor} from "../models/weight-sensor.models";
import {WeightSensorService} from "../services/weight-sensor.service";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TourPackage} from "../../../tour-experience/models/tour-package.models";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  showLuggageOptions = false;

  weightsensor !: WeightSensor;
  constructor(private weightSensorService: WeightSensorService) {}

  ngOnInit(): void {
    this.getWeightSensorById(1);
  }

  getWeightSensorById(id: number): void {
    this.weightSensorService.getWeightSensorById(id).subscribe(
      (response: WeightSensor) => {
        this.weightsensor = response;
      }
    )
  }

  toggleLuggageOptions() {
    this.showLuggageOptions = !this.showLuggageOptions;
  }
}
