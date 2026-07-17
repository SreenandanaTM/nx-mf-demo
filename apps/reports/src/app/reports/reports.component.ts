import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FooterComponent, NavbarComponent} from '@angular-nx-demo/shared/ui'


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {}
