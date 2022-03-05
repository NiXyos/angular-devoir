import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../types';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  film?: Film;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id)
    next: (film: Film) => {
      this.film = film;
    }
  }
}
