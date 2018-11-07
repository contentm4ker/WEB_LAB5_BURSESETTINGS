import { Component, OnInit } from '@angular/core';
import {ServerinteractionService} from "../serverinteraction.service";
import {BurseSettings} from "../settings_burse";

@Component({
  selector: 'app-bursesetts',
  templateUrl: './bursesetts.component.html',
  styleUrls: ['./bursesetts.component.css']
})
export class BursesettsComponent implements OnInit {

  settings: BurseSettings;
  intvl: number;
  starttime: string;
  endtime: string

  constructor(private server: ServerinteractionService) { }

  ngOnInit() {
    this.server.getSettings().subscribe((setts) => {
      this.settings = setts as BurseSettings;
      this.starttime = this.settings.start_time;
      this.endtime = this.settings.end_time;
      this.intvl = this.settings.delta_time
    });
  }

  updateSettings() {
    this.server.putSettings(
      {
      start_time: this.starttime,
      end_time: this.endtime,
      delta_time: this.intvl
      })
  }
}
