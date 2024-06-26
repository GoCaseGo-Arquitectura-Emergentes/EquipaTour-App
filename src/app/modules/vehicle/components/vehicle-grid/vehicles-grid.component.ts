import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from "../../models/vehicle.model";
import {VehicleCardComponent} from "../vehicle-card/vehicle-card.component";

@Component({
  selector: 'app-vehicle-grid',
  templateUrl: './vehicles-grid.component.html',
  standalone: true,
  imports: [
    VehicleCardComponent
  ],
  styleUrls: ['./vehicles-grid.component.css']
})
export class VehiclesGridComponent {
  @Input() existingVehicles: Vehicle[] = [];
  @Output() deleteVeh = new EventEmitter<boolean>();

  deleteVehicleCheck(value: boolean) {
    this.deleteVeh.emit(value);
  }
}
