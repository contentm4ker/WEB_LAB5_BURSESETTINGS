import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bursesetts',
  templateUrl: './bursesetts.component.html',
  styleUrls: ['./bursesetts.component.css']
})
export class BursesettsComponent implements OnInit {

  val: number = 5;

  constructor() { }

  ngOnInit() {
  }
}
