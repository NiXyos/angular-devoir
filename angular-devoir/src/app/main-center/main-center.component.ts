import { Component, OnInit } from '@angular/core';

import { Film } from '../types';

@Component({
  selector: 'app-main-center',
  templateUrl: './main-center.component.html',
  styleUrls: ['./main-center.component.css']
})
export class MainCenterComponent implements OnInit {


  films: Film[] = [
    {
    picture: "https://image.tmdb.org/t/p/w780//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    title: "Harry potter"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
