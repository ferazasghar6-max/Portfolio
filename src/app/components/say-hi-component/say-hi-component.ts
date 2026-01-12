import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-say-hi-component',
  imports: [FormsModule],
  templateUrl: './say-hi-component.html',
  styleUrl: './say-hi-component.scss',
})
export class SayHiComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(){
    console.log(this.contactData)
  }
}
