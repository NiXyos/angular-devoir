import { Component, OnInit } from '@angular/core';
import { Film } from '../types';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-main-center',
  templateUrl: './main-center.component.html',
  styleUrls: ['./main-center.component.css']
})
export class MainCenterComponent implements OnInit {
  films: Film[] = [];
  
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getAllFilms()
      .then(films => {
        this.films = films;
      });
  }

}
