import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showSidebar = false;
  showProfileOptions = false;
  showNotifications = false;
  isMobile = false;

  notifications = [
    {
      icon: 'info',
      title: 'Nuevo equipaje registrado',
      text: 'Texto de la notificación de información',
    },
    {
      icon: 'warning',
      title: 'Movimientos bruscos',
      text: 'Texto de la notificación de advertencia',
    },
    {
      icon: 'error',
      title: 'Problema de equipaje',
      text: 'Texto de la notificación de error',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkViewportSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkViewportSize();
  }

  checkViewportSize(): void {
    this.isMobile = window.innerWidth < 640;
  }

  toggleProfileOptions() {
    this.showProfileOptions = !this.showProfileOptions;
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    if (this.isMobile) {
      this.showSidebar = false;
    }
  }

  logout() {
    // Implementar la lógica de logout aquí
  }
}
