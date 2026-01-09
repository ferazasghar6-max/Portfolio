import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components } from './components/components';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
