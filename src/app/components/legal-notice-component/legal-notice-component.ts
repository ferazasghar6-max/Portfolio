import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-legal-notice-component',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-notice-component.html',
  styleUrl: './legal-notice-component.scss',
})
export class LegalNoticeComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // geht eine Seite zurück, scrollt automatisch dorthin
  }
}
