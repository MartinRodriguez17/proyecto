import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(private router: Router, private adminAuth: AdminAuthService) {}

  login() {
    if (this.adminAuth.login(this.username, this.password)) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }
}
