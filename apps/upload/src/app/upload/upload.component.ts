import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FooterComponent, NavbarComponent} from '@angular-nx-demo/shared/ui'


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {}
