import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-say-hi-component',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, TranslatePipe],
  templateUrl: './say-hi-component.html',
  styleUrl: './say-hi-component.scss',
})
export class SayHiComponent {

constructor(private router: Router) {}
  goToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo(0, 0); // nur beim ersten Laden oben
    });
  }





  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  successMessage = false; 
  showSuccess = () => {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  };

  

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      if (!this.mailTest) {
        this.http
          .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
          .subscribe({
            next: (response) => {
              this.showSuccess();
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else {
        this.showSuccess(); 
        console.log(this.contactData);
        ngForm.resetForm();
      }
    } else {
      console.log('Form is invalid');
    }
  }

}
