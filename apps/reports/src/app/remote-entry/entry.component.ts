import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from '../reports/reports.component';

@Component({
  standalone: true,
  imports: [CommonModule,ReportsComponent ],
  selector: 'app-reports-entry',
  template: `<app-reports></app-reports>`,
})
export class RemoteEntryComponent {}
