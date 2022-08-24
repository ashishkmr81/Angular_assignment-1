import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ash_app';
  clickcounter = 0;
  incrementcounter() {
    this.clickcounter++;
  }
}
