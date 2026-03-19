import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-say-hi-component',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, TranslatePipe, ReactiveFormsModule],
  templateUrl: './say-hi-component.html',
  styleUrl: './say-hi-component.scss',
})
export class SayHiComponent {

constructor(private router: Router) {}
  goToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo(0, 0); 
    });
  }

  http = inject(HttpClient);

  successMessage = false; 

  showSuccess = () => {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  };


    userForm = new FormGroup(
    {
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
      }),
      message: new FormControl('', {
        validators: [Validators.required, Validators.minLength(4)]
      }),
      privacyPolicy: new FormControl(false, { 
        validators: [Validators.requiredTrue]
      }),
    },);


    formSubmit() {
    if(this.userForm.valid){
      this.showSuccess();
      this.userForm.reset();
    }
  }

    handleDisabledClick() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    }
  }
}

