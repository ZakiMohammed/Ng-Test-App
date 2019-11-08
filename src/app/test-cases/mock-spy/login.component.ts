import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <a>
        <span *ngIf="needsLogin()">Login</span>
        <span *ngIf="!needsLogin()">Logout</span>
    </a>
    `
  })
export class LoginComponent {
    
    constructor(private authService: AuthService) {}

    needsLogin(): boolean {
        return !this.authService.isAuthenticated();
    }
}