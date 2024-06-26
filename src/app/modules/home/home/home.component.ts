import {WeightSensor} from "../models/weight-sensor.models";
import {WeightSensorService} from "../services/weight-sensor.service";
import { Component, OnInit, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  showLuggageOptions = false;
  weightsensor!: WeightSensor;
  private intervalId: any;
  private subscription: Subscription = new Subscription();

  constructor(private weightSensorService: WeightSensorService) {}

  ngOnInit(): void {
    this.getWeightSensorById(1);
    this.intervalId = setInterval(() => {
      this.getWeightSensorById(1);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.subscription.unsubscribe();
  }

  getWeightSensorById(id: number): void {
    this.subscription.add(
      this.weightSensorService.getWeightSensorById(id).subscribe(
        (response: WeightSensor) => {
          this.weightsensor = response;
        }
      )
    );
  }

  toggleLuggageOptions() {
    this.showLuggageOptions = !this.showLuggageOptions;
  }
}
