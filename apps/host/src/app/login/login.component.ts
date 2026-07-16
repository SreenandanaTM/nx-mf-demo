import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(FormBuilder)
  loginForm: FormGroup
  router=inject(Router)
  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z_ ]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*-_]*')]]
    })
  }

  login(){
    if(this.loginForm.valid){
      this.router.navigateByUrl('/dashboard')
    }
  }


}
