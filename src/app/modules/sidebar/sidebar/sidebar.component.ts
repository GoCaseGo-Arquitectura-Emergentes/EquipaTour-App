import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showSidebar = false;
  showProfileOptions = false;
  showNotifications = false;

  notifications = [
    { icon: 'info', title: 'Nuevo equipaje registrado', text: 'Texto de la notificación de información' },
    { icon: 'warning', title: 'Movimientos bruscos', text: 'Texto de la notificación de advertencia' },
    { icon: 'error', title: 'Problema de equipaje', text: 'Texto de la notificación de error' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleProfileOptions() {
    this.showProfileOptions = !this.showProfileOptions;
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    // Implementar la lógica de logout aquí
  }
}
