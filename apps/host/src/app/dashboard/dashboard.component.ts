import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{NavbarComponent} from '@angular-nx-demo/shared/ui'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
