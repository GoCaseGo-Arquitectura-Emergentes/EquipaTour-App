import { TourPackage } from './../models/tour-package.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourPackageService {
  private baseUrl = "https://equipatour.osc-fr1.scalingo.io/api/v1/tour-package";
  
  constructor(private http: HttpClient) { }

  getTourPackages(): Observable<TourPackage[]> {
    return this.http.get<TourPackage[]>(this.baseUrl);
  }

  getTourPackageById(id: number): Observable<TourPackage> {
    return this.http.get<TourPackage>(this.baseUrl + "/" + id);
  }

  createTourPackage(tourPackage: TourPackage): Observable<TourPackage> {
    return this.http.post<TourPackage>(this.baseUrl + "/create-tourPackage", tourPackage);
  }

  updateTourPackage(tourPackage: TourPackage): Observable<TourPackage> {
    return this.http.put<TourPackage>(this.baseUrl + "/update-tour-package/" + tourPackage.id, tourPackage);
  }

  deleteTourPackage(tourPackage: TourPackage): Observable<void> {
    return this.http.delete<void>(this.baseUrl + "/delete-tour-package/" + tourPackage.id);
  }
}
