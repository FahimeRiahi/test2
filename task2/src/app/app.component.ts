import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task2';
  config: ToasterConfig = new ToasterConfig({ animation: 'fade', positionClass: 'toast-bottom-left', mouseoverTimerStop: true });

}
