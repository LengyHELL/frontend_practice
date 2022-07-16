import { Component } from '@angular/core';
import { ELEMENT_DATA } from './constants/periodic-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend_practice';
  columns: string[] = ['demo-position', 'demo-image', 'demo-name', 'demo-weight', 'demo-symbol'];
  source = ELEMENT_DATA;
}
