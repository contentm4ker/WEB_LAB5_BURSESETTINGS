import { Component } from '@angular/core';
import { ServerinteractionService } from './serverinteraction.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ServerinteractionService ]
})

export class AppComponent {
  title = 'Настройка биржи брокера';
}
