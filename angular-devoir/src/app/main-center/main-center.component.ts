import { Component, OnInit } from '@angular/core';
import { FILMS } from '../film';

@Component({
  selector: 'app-main-center',
  templateUrl: './main-center.component.html',
  styleUrls: ['./main-center.component.css']
})
export class MainCenterComponent implements OnInit {

  films = FILMS
  constructor() { }

  ngOnInit(): void {
  }

}
