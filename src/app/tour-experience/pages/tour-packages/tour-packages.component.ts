import { Component } from '@angular/core';
import { ListPackagesComponent } from '../../components/list-packages/list-packages.component';

@Component({
  selector: 'app-tour-packages',
  standalone: true,
  imports: [ListPackagesComponent],
  templateUrl: './tour-packages.component.html',
  styleUrl: './tour-packages.component.css'
})
export class TourPackagesComponent {
  
}
