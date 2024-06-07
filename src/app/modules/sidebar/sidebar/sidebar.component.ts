import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  showSidebar = false;
  showProfileOptions = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}


  toggleProfileOptions() {
    this.showProfileOptions = !this.showProfileOptions;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    // Implementar la lógica de logout aquí
  }
}
