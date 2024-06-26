import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TourPackage } from '../../models/tour-package.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [CommonModule, MatFormField, FormsModule, MatInput, MatLabel, MatButton],
  templateUrl: './create-package.component.html',
  styleUrl: './create-package.component.css'
})
export class CreatePackageComponent implements OnInit{
  @Output() createTourPackage = new EventEmitter<TourPackage>();
  @Output() setIsEnableCreatedPopup = new EventEmitter<void>();

  isCreatedTourPackage !: Boolean;
  tourPackageForm!: TourPackage;

  constructor() {}

  ngOnInit(): void {
    this.isCreatedTourPackage = false;
    this.tourPackageForm = new TourPackage();
    console.log(this.tourPackageForm)
  }

  onSubmit(): void {
    this.createTourPackage.emit(this.tourPackageForm);
    this.isCreatedTourPackage = true;
  }

  onCloseUpdate(): void {
    this.setIsEnableCreatedPopup.emit();
  }
}
