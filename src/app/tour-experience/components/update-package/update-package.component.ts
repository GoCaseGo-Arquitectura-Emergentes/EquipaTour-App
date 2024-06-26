import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TourPackage } from '../../models/tour-package.models';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-update-package',
  standalone: true,
  imports: [CommonModule, MatFormField, FormsModule, MatInput, MatLabel],
  templateUrl: './update-package.component.html',
  styleUrl: './update-package.component.css'
})
export class UpdatePackageComponent implements OnInit{
  @Input() tourPackage !: TourPackage;
  @Output() setIsEnableEditPopup = new EventEmitter<void>();
  @Output() onUpdateTourPackage = new EventEmitter<TourPackage>();

  isUpdatedTourPackage !: Boolean;
  tourPackageForm!: TourPackage;

  constructor() {}

  ngOnInit(): void {
      this.isUpdatedTourPackage = false;
      this.tourPackageForm = this.tourPackage;
  }

  onSubmit(): void {
    this.onUpdateTourPackage.emit(this.tourPackageForm);
    this.isUpdatedTourPackage = true;
  }

  onCloseUpdate(): void {
    this.setIsEnableEditPopup.emit();
  }
}
