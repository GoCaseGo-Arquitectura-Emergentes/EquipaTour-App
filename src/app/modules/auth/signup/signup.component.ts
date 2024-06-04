import { Component } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatLabel, MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatLabel, MatFormField],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
