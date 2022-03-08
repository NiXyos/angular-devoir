import { Component, OnInit } from '@angular/core';
import { Genre } from '../types';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getAllGenre().subscribe(
      {
        next: (genres) => {
        this.genres = genres;
        }
      }
    )
  }

}
