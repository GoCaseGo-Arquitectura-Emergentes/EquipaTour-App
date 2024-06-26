import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Vehicle} from "../models/vehicle.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private base = 'https://equipatour.osc-fr1.scalingo.io/api/v1/vehicle';
  constructor(private http: HttpClient) { }

  getAllTransportationsByAgencyId(): Observable<Vehicle[]> {
    // const agencyId = this.userService.getUserIdFromCookies();
    //return this.http.get<Vehicle[]>(`${this.base}/all-vehicles-by-agency-user-id-and-status/${agencyId}/${status}`);
    return this.http.get<Vehicle[]>(`${this.base}`);
  }

  getTransportationById(transportId: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.base}/${transportId}`);
  }

  modifyImage(transportId: number, image: string): Observable<any> {
    return this.http.put<any>(`${this.base}/img/${transportId}`, {image});
  }

  createTransportation(transport: Vehicle): Observable<any> {
    return this.http.post<any>(`${this.base}/create-vehicle`, transport);
  }

  modifyTransportation(idVehicle: number, vehicle: Vehicle): Observable<any> {
    return this.http.put<any>(`${this.base}/update-vehicle/${idVehicle}`, vehicle);
  }

  assignVehicle(vehicleId: number, tourPackageId: number): Observable<any> {
    return this.http.put<any>(`${this.base}/assign-vehicle-to-tour-package/${vehicleId}/${tourPackageId}`, null);
  }

  getAssignedVehiclesByTourPackageId(tourPackageId: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.base}/all-vehicles-by-tour-package/${tourPackageId}`);
  }

  removeAssignedVehicle(vehicleId: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/delete-vehicle/${vehicleId}`);
  }
}
