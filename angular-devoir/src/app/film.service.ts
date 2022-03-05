import { Injectable } from '@angular/core';
import { Film } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  postsPath = '/movies';
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  
  getAllFilms(): Observable<Film> {
    return this.http
      .get<Film>(
        `${this.serverUrl}${this.postsPath}`
      )
  }

  getFilm(id: number): Observable<Film> {
    return this.http
      .get<Film>(
        `${this.serverUrl}${this.postsPath}/${id}`
      )
  }
}
