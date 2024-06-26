import {VEHICLE_STATUS} from "../enums/vehicle-status.enum";

export class Vehicle {
  id: number = 0;
  vehicleBrand: string = '';
  model: string = '';
  plate: string = '';
  vehicleSeats: number = 0;
  agencyId: string = '';
  vehicleDriver: string = '';
  vehicleWeight: number = 0;
  vehicleModel: string | null = null;
  vehicleState: VEHICLE_STATUS = VEHICLE_STATUS.OPERATIONAL;
}
