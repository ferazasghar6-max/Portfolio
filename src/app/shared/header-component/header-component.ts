import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {


  // toggleDialog() {
  //   const dialogRef = document.getElementById('dialog-menu') as HTMLDialogElement;
  //   const languageDiv = document.getElementById('language');
  //   const navRef = document.getElementById('nav-element') as HTMLElement;
  //   if (dialogRef.open) {
  //     dialogRef.close();
  //     if (window.innerWidth <= 640 && languageDiv) {
  //      languageDiv.style.display = 'none';
  //      navRef.style.justifyContent = "space-between"
  //    }
  //   } else {
  //     dialogRef.show();
  //     if (window.innerWidth <= 640 && languageDiv) {
  //      languageDiv.style.display = 'flex';
  //    }
  //   }
  // }

toggleDialog() {
  const dialogRef = document.getElementById('dialog-menu') as HTMLDialogElement;
  const languageDiv = document.getElementById('language');
  const navRef = document.getElementById('nav-element') as HTMLElement;

  if (dialogRef.open) {
    dialogRef.close();
    if (languageDiv) {
      // WICHTIG: Wir setzen den Style zurück statt auf 'none'.
      // Dadurch greift bei > 640px wieder dein CSS: display: flex.
      languageDiv.style.display = ''; 
      // navRef.style.justifyContent = ""; // Setzt auch das Nav-Layout zurück
    }
  } else {
    dialogRef.show();
    if (window.innerWidth <= 640 && languageDiv) {
      languageDiv.style.display = 'flex';
    }
  }
}

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}

