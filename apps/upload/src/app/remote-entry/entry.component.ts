import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from '../upload/upload.component';

@Component({
  standalone: true,
  imports: [CommonModule, UploadComponent],
  selector: 'app-upload-entry',
  template: `<app-upload></app-upload>`,
})
export class RemoteEntryComponent {}
