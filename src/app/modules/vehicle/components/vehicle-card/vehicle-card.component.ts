import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vehicle} from "../../models/vehicle.model";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {EditVehicleDialogComponent} from "../edit-vehicle/edit-vehicle-dialog.component";
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon,
    MatButton,
    MatCardImage,
    NgOptimizedImage
  ],
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle: Vehicle = new Vehicle();
  @Output() deleteVeh = new EventEmitter<boolean>();

  constructor(private matDialog: MatDialog, private vehicleService: VehicleService) {
  }

  editVehicle() {
    const dialog = this.matDialog.open(EditVehicleDialogComponent, {
      data: {
        isEdit: true,
        vehicle: this.vehicle
      }
    })
    dialog.afterClosed().subscribe((vehicle: Vehicle) => {
      if (vehicle) {
        this.vehicleService.modifyTransportation(this.vehicle.id, vehicle).subscribe(() => {
            console.log("Vehicle Edited");
          }
        )
      }
    })
  }

  deleteVehicle() {
    this.vehicleService.removeAssignedVehicle(this.vehicle.id).subscribe(() => {
        console.log("Vehicle Deleted");
        this.deleteVeh.emit(true);
      }
    );
  }


}
