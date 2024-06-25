import { TourPackageService } from './../../services/tour-package.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TourPackage } from '../../models/tour-package.models';
import { CommonModule } from '@angular/common';
import { UpdatePackageComponent } from '../update-package/update-package.component';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule, UpdatePackageComponent],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent implements OnInit{
  @Input() tourPackage !: TourPackage;
  @Output() updateTourPackage = new EventEmitter<TourPackage>();
  @Output() deleteTourPackage = new EventEmitter<TourPackage>();

  
  isEnableEditPopup !: Boolean;

  constructor(private tourPackageService: TourPackageService) {}
  
  ngOnInit(): void {
      this.isEnableEditPopup = false;
  }

  setIsEnableEditPopup() {
    this.isEnableEditPopup = !this.isEnableEditPopup;
  }

  onUpdateTourPackage(tourPackage: TourPackage): void {
    this.updateTourPackage.emit(tourPackage);
  }
}
