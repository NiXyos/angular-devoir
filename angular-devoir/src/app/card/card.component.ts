import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../types';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() film!: Film;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

}
