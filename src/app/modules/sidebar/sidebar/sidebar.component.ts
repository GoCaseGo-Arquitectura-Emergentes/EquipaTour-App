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
    { icon: 'info', title: 'Notificación 1', text: 'Texto de la notificación 1 que se cortará...' },
    { icon: 'warning', title: 'Notificación 2', text: 'Texto de la notificación 2 que se cortará...' },
    { icon: 'error', title: 'Notificación 3', text: 'Texto de la notificación 3 que se cortará...' },
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
