import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  toggleDialog() {
    const dialogRef = document.getElementById('dialog-menu') as HTMLDialogElement;
    if(dialogRef.open){
      dialogRef.close();
    } else{
      dialogRef.show();
    }
  }
}
