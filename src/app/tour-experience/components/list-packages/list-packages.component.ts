import { TourPackage } from './../../models/tour-package.models';
import { TourPackageService } from './../../services/tour-package.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from '../package/package.component';
import { CreatePackageComponent } from '../create-package/create-package.component';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [CommonModule, PackageComponent, CreatePackageComponent],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent implements OnInit{

  tourPackages !: TourPackage[];
  isEnableCreatedPopup !: Boolean;
  constructor(private tourPackageService: TourPackageService) {}

  ngOnInit(): void {
    this.isEnableCreatedPopup = false;
    this.tourPackages = [] as TourPackage[];    
    this.getAllTourPackages();
  }

  getAllTourPackages(): void {
    this.tourPackageService.getTourPackages().subscribe(
      (response: TourPackage[]) => {
        this.tourPackages = response;
      }
    )
  }
  addTourPackageFake(): void {
    var tourPackage1: TourPackage = {id: 1, packageName: "Macchu Picchu", availableSlots: 50, guideName: "Teresa"} as TourPackage;
    var tourPackage2: TourPackage = {id: 2, packageName: "Macchu Picchu", availableSlots: 50, guideName: "Teresa"} as TourPackage;
    var tourPackage3: TourPackage = {id: 3, packageName: "Macchu Picchu", availableSlots: 50, guideName: "Teresa"} as TourPackage;
    var tourPackage4: TourPackage = {id: 4, packageName: "Macchu Picchu", availableSlots: 50, guideName: "Teresa"} as TourPackage;
    
    this.tourPackages.push(tourPackage1, tourPackage2, tourPackage3, tourPackage4);
  }


  deleteTourPackage(tourPackage: TourPackage): void {
    console.log(tourPackage)

    this.tourPackageService.deleteTourPackage(tourPackage).subscribe(
      () => {
        this.tourPackages = this.tourPackages.filter(tourPackageFilter => tourPackageFilter.id !== tourPackage.id);
      }
    )
  }

  createTourPackage(tourPackage: TourPackage): void {
    console.log(tourPackage);
    this.tourPackageService.createTourPackage(tourPackage).subscribe(
      (reponse: TourPackage) => {
        this.tourPackages.push(reponse);
      }
    )
  }
  
  updateTourPackage(tourPackage: TourPackage): void {
    this.tourPackageService.updateTourPackage(tourPackage)
    .subscribe(
      (response: TourPackage) => {
        const actualIndex = this.tourPackages.findIndex( tourPackageFindIndex => tourPackageFindIndex.id == response.id)
        
        if(actualIndex != -1) {
          this.tourPackages[actualIndex] = {...this.tourPackages[actualIndex], ...response}
        }
      }
    )
  }
  
  setIsEnableCreatedPopup(): void {
    this.isEnableCreatedPopup = !this.isEnableCreatedPopup;
  }
}
