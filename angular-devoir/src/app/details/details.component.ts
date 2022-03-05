import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FILMS } from '../film';
import { Film } from '../types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  film?: Film;
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = FILMS.find(item => id === item.id);
    console.log(this.film);
  }

}
