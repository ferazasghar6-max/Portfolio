import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  toggleDialog() {
    const dialogRef = document.getElementById('dialog-menu') as HTMLDialogElement;
    if (dialogRef.open) {
      dialogRef.close();
    } else {
      dialogRef.show();
    }
  }

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
