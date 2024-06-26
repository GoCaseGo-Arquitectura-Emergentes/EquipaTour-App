import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {VehiclesGridComponent} from "../../components/vehicle-grid/vehicles-grid.component";
import {Vehicle} from "../../models/vehicle.model";
import {MatButton} from "@angular/material/button";
import {VehicleService} from "../../services/vehicle.service";
import {VEHICLE_STATUS} from "../../enums/vehicle-status.enum";
import {EditVehicleDialogComponent} from "../../components/edit-vehicle/edit-vehicle-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  standalone: true,
  imports: [
    MatIcon,
    MatChipListbox,
    MatChipOption,
    VehiclesGridComponent,
    MatButton
  ],
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  existingVehicles: Vehicle[] = [];
  existingVehiclesFilter: Vehicle[] = [];
  constructor(private vehicleService: VehicleService,
              private matDialog: MatDialog
              ) {}
  addVehicle() {
    const dialog = this.matDialog.open(EditVehicleDialogComponent, {
      data: {
        isEdit: false,
        vehicle: {}
      }
    })
    dialog.afterClosed().subscribe((vehicle: Vehicle) => {
      if (vehicle) {
        this.vehicleService.createTransportation(vehicle).subscribe(() => {
            console.log("Vehicle Created");
            this.refresh();
          }
        )
      }
    })
  }
  ngOnInit() {
    this.vehicleService.getAllTransportationsByAgencyId().subscribe((vehicles: Vehicle[]) => {
        console.log("vehicles", vehicles);
        this.existingVehicles = vehicles;
        this.existingVehiclesFilter  = vehicles.filter(vehicle => vehicle.vehicleState === VEHICLE_STATUS.OPERATIONAL );
      }
    );
  }

  getExistingVehiclesByStatus(status: VEHICLE_STATUS) {
    this.existingVehiclesFilter  = this.existingVehicles.filter(vehicle => vehicle.vehicleState === status );
  }

  deleteVeh(value: boolean) {
    if(value) {
      this.refresh();
    }
  }

  refresh() {
    this.vehicleService.getAllTransportationsByAgencyId().subscribe((vehicles: Vehicle[]) => {
        console.log("vehicles", vehicles);
        this.existingVehicles = vehicles;
        this.existingVehiclesFilter  = vehicles.filter(vehicle => vehicle.vehicleState === VEHICLE_STATUS.OPERATIONAL );
      }
    );
  }

  protected readonly VEHICLE_STATUS = VEHICLE_STATUS;
  selectedStatus: string = 'OPERATIONAL';
}
