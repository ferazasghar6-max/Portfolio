import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-say-hi-component',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './say-hi-component.html',
  styleUrl: './say-hi-component.scss',
})
export class SayHiComponent {
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

  onSubmit(ngForm: NgForm) {
    // Check if form is valid first
    if (ngForm.valid) {
      if (!this.mailTest) {
        this.http
          .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else {
        // Logic for MailTest = true
        console.log('Form is valid, but in test mode:', this.contactData);
        ngForm.resetForm();
      }
    } else {
      // If form is invalid, this block executes.
      // The HTML will now show errors because ngForm.submitted is true.
      console.log('Form is invalid');
    }
  }

}
