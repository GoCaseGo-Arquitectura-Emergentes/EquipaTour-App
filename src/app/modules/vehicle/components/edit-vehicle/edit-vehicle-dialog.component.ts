import {Component, EventEmitter, HostListener, Inject, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from "@angular/material/button";
import { Vehicle } from "../../models/vehicle.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatCardImage} from "@angular/material/card";
import {VEHICLE_STATUS} from "../../enums/vehicle-status.enum";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [CommonModule, MatFormField, FormsModule, MatInput, MatLabel, MatButton, MatCardImage, MatChipListbox, MatChipOption, MatSelect, MatOption],
  templateUrl: './edit-vehicle-dialog.component.html',
  styleUrl: './edit-vehicle-dialog.component.css'
})
export class EditVehicleDialogComponent implements OnInit{
  @Output() createTourPackage = new EventEmitter<Vehicle>();
  @Output() setIsEnableCreatedPopup = new EventEmitter<void>();

  isCreatedTourPackage !: Boolean;
  vehicle!: Vehicle;
  isEdit: boolean = false;
  modelList = ['1','2','3','4','5','6','7','8'];

  constructor(public dialogRef: MatDialogRef<EditVehicleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.vehicle = this.data.vehicle;
    this.isEdit = this.data.isEdit;
  }

  onSubmit(): void {
    this.createTourPackage.emit(this.vehicle);
    this.isCreatedTourPackage = true;
    this.onClick(this.vehicle);
  }


  onCloseUpdate() {
    this.onClick(false);
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.onClick(false);
  }

  onClick(newVehicle: any): void {
    this.dialogRef.close(newVehicle);
  }

  selectCar(event: Event) {
    this.vehicle.vehicleModel = (event.target as HTMLSelectElement).value;
    switch (this.vehicle.vehicleModel) {
      case "1":
        this.vehicle.vehicleSeats = 5;
        this.vehicle.vehicleWeight = 2010;
        break;
      case "2":
        this.vehicle.vehicleSeats = 6;
        this.vehicle.vehicleWeight = 1810;
        break;
      case "3":
        this.vehicle.vehicleSeats = 5;
        this.vehicle.vehicleWeight = 1700;
        break;
      case "4":
        this.vehicle.vehicleSeats = 5;
        this.vehicle.vehicleWeight = 2000;
        break;
      case "5":
        this.vehicle.vehicleSeats = 6;
        this.vehicle.vehicleWeight = 2003;
        break;
      case "6":
        this.vehicle.vehicleSeats = 8;
        this.vehicle.vehicleWeight = 1810;
        break;
      case "7":
        this.vehicle.vehicleSeats = 7;
        this.vehicle.vehicleWeight = 1900;
        break;
      case "8":
        this.vehicle.vehicleSeats = 6;
        this.vehicle.vehicleWeight = 2202;
        break;
      case "9":
        this.vehicle.vehicleSeats = 5;
        this.vehicle.vehicleWeight = 2235;
        break;

    }

  }

  protected readonly VEHICLE_STATUS = VEHICLE_STATUS;
}
